import { useEffect, useMemo, useRef, useState } from 'react'

const starterPrompts = [
  'What services do you offer?',
  'Show me your best AI project',
  'How can I contact you?',
]

const initialMessages = [
  {
    role: 'assistant',
    content:
      "Hey, I am Dushyant's AI assistant. Ask me about his services, projects, tech stack, or how to start a project.",
  },
]

function AiChatBox({ autoOpenDelay = 1200 }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesRef = useRef(null)
  const tokenQueueRef = useRef([])
  const isTypingRef = useRef(false)

  useEffect(() => {
    const popupTimer = window.setTimeout(() => setIsOpen(true), autoOpenDelay)
    return () => window.clearTimeout(popupTimer)
  }, [autoOpenDelay])

  useEffect(() => {
    const container = messagesRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages, isLoading, isOpen])

  const statusText = useMemo(() => {
    if (isLoading) return 'Thinking'
    return 'Online'
  }, [isLoading])

  const processTokenQueue = () => {
    if (tokenQueueRef.current.length === 0) {
      isTypingRef.current = false
      return
    }

    isTypingRef.current = true
    const token = tokenQueueRef.current.shift()

    setMessages((current) => {
      const next = [...current]
      const last = next[next.length - 1]

      if (last?.role === 'assistant') {
        next[next.length - 1] = { ...last, content: `${last.content}${token}` }
        return next
      }

      return [...next, { role: 'assistant', content: token }]
    })

    // Typing speed: 30ms per token (adjustable)
    setTimeout(processTokenQueue, 30)
  }

  const appendToLastAssistantMessage = (token) => {
    tokenQueueRef.current.push(token)
    if (!isTypingRef.current) {
      processTokenQueue()
    }
  }

  const readEventStream = async (response) => {
    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('No response stream')
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
        const eventName = event.match(/^event:\s*(.+)$/m)?.[1]?.trim()
        const dataText = event
          .split('\n')
          .filter((line) => line.startsWith('data:'))
          .map((line) => line.replace(/^data:\s*/, ''))
          .join('\n')

        if (!dataText) continue

        const payload = JSON.parse(dataText)

        if (eventName === 'error') {
          throw new Error(payload.error || 'Streaming chat failed')
        }

        if (eventName === 'token') {
          const token = payload.token || ''
          answer += token
          appendToLastAssistantMessage(token)
        }
      }
    }

    return answer.trim()
  }

  const animateAnswer = (fullText) => {
    // Push all characters to queue with slight batching for natural typing
    const chunkSize = 2
    for (let i = 0; i < fullText.length; i += chunkSize) {
      tokenQueueRef.current.push(fullText.slice(i, i + chunkSize))
    }
    if (!isTypingRef.current) {
      processTokenQueue()
    }
  }

  const sendMessage = async (text = input) => {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    const nextMessages = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)

    try {
      setMessages([...nextMessages, { role: 'assistant', content: '' }])

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!response.ok) {
        throw new Error('Chat API unavailable')
      }

      const contentType = response.headers.get('content-type') || ''

      if (contentType.includes('text/event-stream')) {
        const streamedAnswer = await readEventStream(response)
        if (!streamedAnswer) {
          throw new Error('Empty streamed answer')
        }
        return
      }

      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      const answer = data.answer || "I'm having trouble connecting to my knowledge base. Please try again in a moment."
      animateAnswer(answer)
    } catch (error) {
      setMessages([...nextMessages, { role: 'assistant', content: "Sorry, I'm temporarily unavailable. You can reach Dushyant directly at dushyantkhandelwal4665@gmail.com" }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  const stopPageScroll = (event) => {
    event.stopPropagation()
  }

  return (
    <div className={`ai-chat ${isOpen ? 'is-open' : ''}`} aria-live="polite">
      {isOpen && (
        <section
          className="ai-chat__panel"
          aria-label="AI portfolio assistant"
          data-lenis-prevent
          onWheelCapture={stopPageScroll}
          onTouchMoveCapture={stopPageScroll}
        >
          <div className="ai-chat__header">
            <div>
              <span className="ai-chat__eyebrow">AI Assistant</span>
              <h2 className="ai-chat__title">Ask about Dushyant</h2>
            </div>
            <button
              className="ai-chat__icon-button magnetic"
              type="button"
              aria-label="Close chat"
              data-cursor="Close"
              onClick={() => setIsOpen(false)}
            >
              <span aria-hidden="true" />
            </button>
          </div>

          <div className="ai-chat__status">
            <span aria-hidden="true" />
            {statusText}
          </div>

          <div className="ai-chat__messages" ref={messagesRef} data-lenis-prevent>
            {messages.map((message, index) => (
              <div className={`ai-chat__message ai-chat__message--${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </div>
            ))}
            {isLoading && <div className="ai-chat__message ai-chat__message--assistant">Typing...</div>}
          </div>

          <div className="ai-chat__prompts" aria-label="Suggested questions">
            {starterPrompts.map((prompt) => (
              <button
                className="ai-chat__prompt magnetic"
                type="button"
                key={prompt}
                data-cursor="Ask"
                onClick={() => sendMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="ai-chat__form" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services, projects, pricing..."
              aria-label="Ask the AI assistant"
            />
            <button className="ai-chat__send magnetic" type="submit" data-cursor="Send" disabled={isLoading}>
              Send
            </button>
          </form>
        </section>
      )}

      {!isOpen && (
        <button
          className="ai-chat__launcher magnetic"
          type="button"
          aria-label="Open AI chat"
          data-cursor="Chat"
          onClick={() => setIsOpen(true)}
        >
          <span aria-hidden="true" />
          AI
        </button>
      )}
    </div>
  )
}

export default AiChatBox
