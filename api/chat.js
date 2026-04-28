import { buildAssistantContext } from '../src/data/assistantKnowledge.js'

const DEFAULT_MODEL = 'gpt-4o-mini'
const DEFAULT_BASE_URL = 'https://api.cometapi.com/v1'

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

function sendEvent(res, event, payload) {
  res.write(`event: ${event}\n`)
  res.write(`data: ${JSON.stringify(payload)}\n\n`)
}

function sanitizeMessages(messages = []) {
  return messages
    .filter((message) => message && ['user', 'assistant'].includes(message.role))
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: String(message.content || '').slice(0, 1200),
    }))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.COMET_API_KEY
  if (!apiKey) {
    sendJson(res, 500, { error: 'Missing COMET_API_KEY' })
    return
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    const messages = sanitizeMessages(body.messages)

    if (!messages.length) {
      sendJson(res, 400, { error: 'No messages provided' })
      return
    }

    const baseUrl = (process.env.COMET_BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, '')
    const model = process.env.COMET_MODEL || DEFAULT_MODEL

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify({
        model,
        temperature: 0.45,
        max_tokens: 420,
        stream: true,
        messages: [{ role: 'system', content: buildAssistantContext() }, ...messages],
      }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      sendJson(res, response.status, {
        error: data?.error?.message || data?.message || 'Comet API request failed',
      })
      return
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('Connection', 'keep-alive')
    res.flushHeaders?.()

    const reader = response.body?.getReader()
    if (!reader) {
      sendEvent(res, 'error', { error: 'Comet API did not return a stream' })
      res.end()
      return
    }

    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const events = buffer.split('\n\n')
      buffer = events.pop() || ''

      for (const event of events) {
        const dataLines = event
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => line.startsWith('data:'))
          .map((line) => line.replace(/^data:\s*/, ''))

        for (const dataLine of dataLines) {
          if (!dataLine || dataLine === '[DONE]') continue

          try {
            const payload = JSON.parse(dataLine)
            const token =
              payload?.choices?.[0]?.delta?.content ||
              payload?.choices?.[0]?.message?.content ||
              payload?.choices?.[0]?.text ||
              ''

            if (token) {
              sendEvent(res, 'token', { token })
            }
          } catch {
            // Ignore malformed upstream chunks. One bad chunk should not kill the chat.
          }
        }
      }
    }

    sendEvent(res, 'done', { ok: true })
    res.end()
  } catch (error) {
    if (!res.headersSent) {
      sendJson(res, 500, { error: error.message || 'Unexpected chat error' })
      return
    }

    sendEvent(res, 'error', { error: error.message || 'Unexpected chat error' })
    res.end()
  }
}
