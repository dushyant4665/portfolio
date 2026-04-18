import { useEffect, useRef } from 'react'

const philosophers = [
  {
    name: 'Marcus Aurelius',
    short: 'Marcus',
    img: '/marcusarelius.webp',
  },
  {
    name: 'Aristotle',
    short: 'Aristotle',
    img: '/aristrotle.jpg',
  },
  {
    name: 'Achilles',
    short: 'Achilles',
    img: '/achilles.jpg',
  },
  {
    name: 'Portrait',
    short: 'Figure I',
    img: '/c09c0de05f02d699a9b04fc03db3377a.jpg',
  },
  {
    name: 'Generated Portrait I',
    short: 'Portrait I',
    img: '/ChatGPT Image Apr 9, 2026, 07_00_44 PM.png',
  },
  {
    name: 'Generated Portrait II',
    short: 'Portrait II',
    img: '/ChatGPT Image Apr 9, 2026, 07_01_59 PM.png',
  },
]

function PhilosopherStage() {
  const stageRef = useRef(null)
  const cardCountRef = useRef(0)
  const lastSpawnRef = useRef(0)
  const activeCardsRef = useRef([])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const MAX_CARDS = 40
    const SPAWN_THROTTLE_MS = 60
    const CARD_LIFETIME_MS = 1200

    const spawnCard = (clientX, clientY) => {
      const x = clientX
      const y = clientY

      const now = performance.now()
      if (now - lastSpawnRef.current < SPAWN_THROTTLE_MS) return
      lastSpawnRef.current = now

      cardCountRef.current += 1
      const p = philosophers[cardCountRef.current % philosophers.length]
      const S = 110
      const H = 138

      const div = document.createElement('div')
      div.className = 'philosopher-card'

      const angle = (Math.random() - 0.5) * 24
      const offsetX = (Math.random() - 0.5) * 20
      const offsetY = (Math.random() - 0.5) * 10

      div.style.cssText = `
        position: absolute;
        left: ${x - S / 2 + offsetX}px;
        top: ${y - H / 2 + offsetY}px;
        width: ${S}px;
        height: ${H}px;
        opacity: 0;
        transform: rotate(${angle}deg) scale(0.6) translateY(10px);
        transition: opacity 0.15s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        border-radius: 3px;
        overflow: hidden;
        border: 1px solid rgba(180,150,90,0.3);
        z-index: 50;
      `

      const img = document.createElement('img')
      img.src = p.img
      img.alt = p.name
      img.style.cssText = `
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: center top;
        filter: sepia(0.25) contrast(1.1) brightness(0.9);
        display: block;
        pointer-events: none;
      `
      div.appendChild(img)

      const nameTag = document.createElement('div')
      nameTag.className = 'name-tag'
      nameTag.textContent = p.short
      div.appendChild(nameTag)

      stage.appendChild(div)
      activeCardsRef.current.push(div)

      requestAnimationFrame(() => {
        div.style.opacity = '1'
        div.style.transform = `rotate(${angle}deg) scale(1) translateY(0px)`
      })

      setTimeout(() => {
        div.style.opacity = '0'
        div.style.transform = `rotate(${angle}deg) scale(0.9) translateY(12px)`
        setTimeout(() => {
          if (div.parentNode === stage) {
            stage.removeChild(div)
          }
          const idx = activeCardsRef.current.indexOf(div)
          if (idx > -1) activeCardsRef.current.splice(idx, 1)
        }, 180)
      }, CARD_LIFETIME_MS)

      while (activeCardsRef.current.length > MAX_CARDS) {
        const oldest = activeCardsRef.current.shift()
        if (oldest && oldest.parentNode === stage) {
          oldest.style.opacity = '0'
          setTimeout(() => {
            if (oldest.parentNode === stage) {
              stage.removeChild(oldest)
            }
          }, 150)
        }
      }
    }

    const onPointerMove = (e) => {
      spawnCard(e.clientX, e.clientY)
    }

    const onPointerDown = (e) => {
      spawnCard(e.clientX, e.clientY)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      activeCardsRef.current.forEach((div) => {
        if (div.parentNode === stage) {
          stage.removeChild(div)
        }
      })
      activeCardsRef.current = []
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="philosopher-stage"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  )
}

export default PhilosopherStage
