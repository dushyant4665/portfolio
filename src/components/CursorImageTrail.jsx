import { useEffect, useRef, useState } from 'react'

const hoverImageNames = [
  'achilles.jpg',
  'aristrotle.jpg',
  'In the mid-4th century BCE, after the weakening of Athens following the Peloponnesian War, the r.jpg',
  'In the mid-4th century BCE, after the weakening of Athens following the Peloponnesian War, the r (1).jpg',
  'In the mid-4th century BCE, after the weakening of Athens following the Peloponnesian War, the r (2).jpg',
  'marcusarelius.webp',
  'Socrates recounts a myth told by Protagoras, explaining why humans need aid�s (reverence-shame) .jpg',
  'Socrates recounts a myth told by Protagoras, explaining why humans need aid�s (reverence-shame)  (1).jpg',
  'Socrates recounts a myth told by Protagoras, explaining why humans need aid�s (reverence-shame)  (2).jpg',
  'Socrates recounts a myth told by Protagoras, explaining why humans need aid�s (reverence-shame)  (3).jpg',
  'Socrates recounts a myth told by Protagoras, explaining why humans need aid�s (reverence-shame)  (4).jpg',
  '�Before excellence the immortal gods have placed sweat;long and steep is the path that leads to .jpg',
  '�Before excellence the immortal gods have placed sweat;long and steep is the path that leads to  (1).jpg',
  '????????????????????� ?????????????? ???? ???????? (????).In Anaxagoras� cosmology, the universe.jpg',
]

const images = hoverImageNames.map((name) => encodeURI(`/hover/${name}`))

const SPAWN_INTERVAL = 90
const EXIT_DELAY = 1200
const EXIT_DURATION = 600
const MAX_CARDS = 20

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function CursorImageTrail() {
  const containerRef = useRef(null)
  const cursorDotRef = useRef(null)
  const timeoutsRef = useRef(new Map())
  const lastSpawnRef = useRef(0)
  const nextIdRef = useRef(0)
  const [cards, setCards] = useState([])
  const [hasMoved, setHasMoved] = useState(false)
  const [isInside, setIsInside] = useState(false)

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(({ enterTimeout, exitTimeout, removeTimeout }) => {
        window.clearTimeout(enterTimeout)
        window.clearTimeout(exitTimeout)
        window.clearTimeout(removeTimeout)
      })
      timeoutsRef.current.clear()
      document.body.classList.remove('cursor-trail-active')
    }
  }, [])

  const clearCardTimeouts = (id) => {
    const timers = timeoutsRef.current.get(id)
    if (!timers) return

    window.clearTimeout(timers.enterTimeout)
    window.clearTimeout(timers.exitTimeout)
    window.clearTimeout(timers.removeTimeout)
    timeoutsRef.current.delete(id)
  }

  const scheduleCardLifecycle = (id) => {
    const enterTimeout = window.setTimeout(() => {
      setCards((currentCards) =>
        currentCards.map((card) => (card.id === id ? { ...card, isVisible: true } : card))
      )
    }, 16)

    const exitTimeout = window.setTimeout(() => {
      setCards((currentCards) =>
        currentCards.map((card) => (card.id === id ? { ...card, phase: 'out' } : card))
      )
    }, EXIT_DELAY)

    const removeTimeout = window.setTimeout(() => {
      setCards((currentCards) => currentCards.filter((card) => card.id !== id))
      timeoutsRef.current.delete(id)
    }, EXIT_DELAY + EXIT_DURATION)

    timeoutsRef.current.set(id, { enterTimeout, exitTimeout, removeTimeout })
  }

  const spawnCard = (clientX, clientY) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const id = nextIdRef.current
    nextIdRef.current += 1

    const card = {
      id,
      x: clientX - rect.left + randomBetween(-20, 20),
      y: clientY - rect.top + randomBetween(-20, 20),
      rotation: randomBetween(-15, 15),
      width: Math.round(randomBetween(160, 240)),
      imageSrc: images[Math.floor(Math.random() * images.length)],
      phase: 'in',
      isVisible: false,
    }

    setCards((currentCards) => {
      const nextCards = [...currentCards, card]

      if (nextCards.length <= MAX_CARDS) {
        return nextCards
      }

      const [oldest, ...remainingCards] = nextCards
      clearCardTimeouts(oldest.id)
      return remainingCards
    })

    scheduleCardLifecycle(id)
  }

  const handleMouseEnter = () => {
    setIsInside(true)
    document.body.classList.add('cursor-trail-active')
  }

  const handleMouseLeave = () => {
    setIsInside(false)
    document.body.classList.remove('cursor-trail-active')
  }

  const handleMouseMove = (event) => {
    const dot = cursorDotRef.current
    if (dot) {
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    if (!hasMoved) {
      setHasMoved(true)
    }

    const now = window.performance.now()
    if (now - lastSpawnRef.current < SPAWN_INTERVAL) {
      return
    }

    lastSpawnRef.current = now
    spawnCard(event.clientX, event.clientY)
  }

  return (
    <section
      ref={containerRef}
      className="cursor-trail"
      id="explore"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={`cursor-trail__prompt ${hasMoved ? 'is-hidden' : ''}`}>
        Move to Explore
      </div>

      <div className="cursor-trail__copy layout-grid">
        <div>
          <span className="eyebrow t-label">Cursor Reel</span>
          <h2 className="t-display cursor-trail__title">A tactile section that responds to every move.</h2>
          <p className="t-body cursor-trail__body">
            Hover through this stage to scatter image cards in real time while the custom cursor hands control back to the content below.
          </p>
        </div>
      </div>

      {cards.map((card) => {
        const isExiting = card.phase === 'out'
        const isVisible = card.isVisible && !isExiting

        return (
          <img
            key={card.id}
            alt=""
            aria-hidden="true"
            className="cursor-trail__card"
            src={card.imageSrc}
            style={{
              left: `${card.x}px`,
              top: `${card.y}px`,
              width: `${card.width}px`,
              opacity: isExiting ? 0 : isVisible ? 1 : 0,
              transform: isExiting
                ? `translate3d(-50%, calc(-50% - 40px), 0) scale(0.85) rotate(${card.rotation}deg)`
                : isVisible
                  ? `translate3d(-50%, -50%, 0) scale(1) rotate(${card.rotation}deg)`
                  : `translate3d(-50%, -50%, 0) scale(0.6) rotate(${card.rotation}deg)`,
              transition: isExiting
                ? `opacity ${EXIT_DURATION}ms ease-in, transform ${EXIT_DURATION}ms ease-in`
                : 'opacity 200ms ease-out, transform 200ms ease-out',
              objectFit: 'cover',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
            }}
          />
        )
      })}

      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className={`cursor-trail__dot ${isInside ? 'is-visible' : ''}`}
      />
    </section>
  )
}

export default CursorImageTrail
