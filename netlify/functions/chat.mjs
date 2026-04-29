import { buildAssistantContext } from '../../src/data/assistantKnowledge.js'

const DEFAULT_MODEL = 'gpt-4o-mini'
const DEFAULT_BASE_URL = 'https://api.cometapi.com/v1'

function sendJson(res, status, payload) {
  return {
    statusCode: status,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }
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

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return sendJson(null, 405, { error: 'Method not allowed' })
  }

  const apiKey = process.env.COMET_API_KEY
  if (!apiKey) {
    return sendJson(null, 500, { error: 'Missing COMET_API_KEY environment variable. Set it in Netlify dashboard under Site settings > Environment variables.' })
  }

  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body || '{}') : event.body || {}
    const messages = sanitizeMessages(body.messages)

    if (!messages.length) {
      return sendJson(null, 400, { error: 'No messages provided' })
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
      return sendJson(null, response.status, {
        error: data?.error?.message || data?.message || 'Comet API request failed',
      })
    }

    // Stream the response by reading all tokens and returning the full answer
    // Netlify Functions don't support SSE natively, so we collect and return JSON
    const reader = response.body?.getReader()
    if (!reader) {
      return sendJson(null, 500, { error: 'Comet API did not return a stream' })
    }

    const decoder = new TextDecoder()
    let buffer = ''
    let answer = ''

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
              answer += token
            }
          } catch {
            // Ignore malformed upstream chunks
          }
        }
      }
    }

    if (!answer.trim()) {
      return sendJson(null, 500, { error: 'Empty response from AI' })
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: answer.trim() }),
    }
  } catch (error) {
    return sendJson(null, 500, { error: error.message || 'Unexpected chat error' })
  }
}
