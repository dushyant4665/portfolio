import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const label = labelRef.current
    if (!cursor || !label) return undefined

    let mouseX = window.innerWidth * 0.5
    let mouseY = window.innerHeight * 0.5
    let cursorX = mouseX
    let cursorY = mouseY
    let frameId = 0

    const updateHoverState = (event, active) => {
      const interactive = event.target.closest('a, button, [role="button"], .magnetic, .work-card, .project-panel, .scroll-video__wrapper')
      if (!interactive) return

      label.textContent = interactive.dataset.cursor || 'View'
      setIsActive(active)
    }

    const onPointerMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      setIsVisible(true)
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18
      cursorY += (mouseY - cursorY) * 0.18
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`
      frameId = window.requestAnimationFrame(animate)
    }

    const onPointerLeave = () => setIsVisible(false)
    const onPointerEnter = () => setIsVisible(true)
    const onPointerOver = (event) => updateHoverState(event, true)
    const onPointerOut = (event) => updateHoverState(event, false)

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('pointerenter', onPointerEnter)
    document.addEventListener('pointerover', onPointerOver)
    document.addEventListener('pointerout', onPointerOut)

    frameId = window.requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('pointerenter', onPointerEnter)
      document.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('pointerout', onPointerOut)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isActive ? 'is-active' : ''} ${isVisible ? 'cursor--visible' : ''}`}
      aria-hidden="true"
    >
      <div className="cursor__dot" />
      <div className="cursor__ring" />
      <span ref={labelRef} className="cursor__label">
        View
      </span>
    </div>
  )
}

export default CustomCursor
