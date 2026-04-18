import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function Preloader() {
  const [count, setCount] = useState(0)
  const rootRef = useRef(null)
  const fillRef = useRef(null)
  const countRef = useRef(0)

  useEffect(() => {
    if (sessionStorage.getItem('dushyant-preloader-seen') === 'true') {
      window.dispatchEvent(new Event('preloaderComplete'))
      return undefined
    }

    let disposed = false
    const timeouts = []

    const step = () => {
      if (disposed) return

      const current = countRef.current
      if (current >= 100) {
        gsap.killTweensOf(fillRef.current)
        gsap.to(fillRef.current, {
          width: '100%',
          duration: 0.2,
          ease: 'power2.out'
        })

        gsap.to(rootRef.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.8,
          delay: 0.18,
          ease: 'expo.inOut',
          onComplete: () => {
            sessionStorage.setItem('dushyant-preloader-seen', 'true')
            window.dispatchEvent(new Event('preloaderComplete'))
          }
        })
        return
      }

      const increment = Math.min(
        100 - current,
        current < 40 ? Math.ceil(Math.random() * 12) : Math.ceil(Math.random() * 8)
      )
      const next = Math.min(100, current + increment)
      countRef.current = next
      setCount(next)

      gsap.to(fillRef.current, {
        width: `${next}%`,
        duration: 0.25,
        ease: 'power2.out'
      })

      const delay = current < 60 ? 30 + Math.random() * 90 : 60 + Math.random() * 140
      const timeout = window.setTimeout(step, delay)
      timeouts.push(timeout)
    }

    const initial = window.setTimeout(step, 220)
    timeouts.push(initial)

    return () => {
      disposed = true
      timeouts.forEach((id) => window.clearTimeout(id))
      gsap.killTweensOf([fillRef.current, rootRef.current])
    }
  }, [])

  return (
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__meta t-label">
          <span>Loading portfolio</span>
          <span>Jaipur / India</span>
        </div>
        <div className="preloader__counter">{String(count).padStart(3, '0')}</div>
        <div className="preloader__line">
          <div className="preloader__line-fill" ref={fillRef} />
        </div>
      </div>
    </div>
  )
}

export default Preloader
