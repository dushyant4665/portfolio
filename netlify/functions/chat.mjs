import { buildAssistantContext } from '../../src/data/assistantKnowledge.js'

const DEFAULT_MODEL = 'gpt-4o-mini'
const DEFAULT_BASE_URL = 'https://api.cometapi.com/v1'

function sanitizeMessages(messages = []) {
  return messages
    .filter((message) => message && ['user', 'assistant'].includes(message.role))
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: String(message.content || '').slice(0, 1200),
    }))
}

function sseEvent(event, payload) {
  return `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`
}

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  const apiKey = process.env.COMET_API_KEY
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing COMET_API_KEY environment variable. Set it in Netlify dashboard under Site settings > Environment variables.' }),
    }
  }

  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body || '{}') : event.body || {}
    const messages = sanitizeMessages(body.messages)

    if (!messages.length) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'No messages provided' }),
      }
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
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: data?.error?.message || data?.message || 'Comet API request failed' }),
      }
    }

    // Create a ReadableStream that relays SSE tokens from Comet API to the client
    const encoder = new TextEncoder()
    const upstreamReader = response.body?.getReader()

    if (!upstreamReader) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Comet API did not return a stream' }),
      }
    }

    const stream = new ReadableStream({
      async start(controller) {
        const decoder = new TextDecoder()
        let buffer = ''

        try {
          while (true) {
            const { done, value } = await upstreamReader.read()
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
                    controller.enqueue(encoder.encode(sseEvent('token', { token })))
                  }
                } catch {
                  // Ignore malformed upstream chunks
                }
              }
            }
          }

          controller.enqueue(encoder.encode(sseEvent('done', { ok: true })))
          controller.close()
        } catch (error) {
          controller.enqueue(encoder.encode(sseEvent('error', { error: error.message || 'Stream error' })))
          controller.close()
        }
      },
    })

    return new Response(stream, {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Unexpected chat error' }),
    }
  }
}
