import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 27
const FRAME_PATH = '/onschroll/'
const FRAME_PREFIX = 'ezgif-frame-'
const FRAME_PADDING = 3
const FRAME_EXT = '.jpg'
const SCROLL_PER_FRAME = 42

function getFrameSrc(index) {
  const frameNumber = String(index + 1).padStart(FRAME_PADDING, '0')
  return `${FRAME_PATH}${FRAME_PREFIX}${frameNumber}${FRAME_EXT}`
}

function ScrollVideo() {
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const progressBarRef = useRef(null)
  const hintRef = useRef(null)
  const imagesRef = useRef(new Array(FRAME_COUNT))
  const viewportRef = useRef({ width: 0, height: 0, ratio: 1 })
  const rafRef = useRef(null)
  const displayFrameRef = useRef(0)
  const targetFrameRef = useRef(0)
  const currentFrameRef = useRef(0)

  const [loaded, setLoaded] = useState(false)
  const [loadPct, setLoadPct] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)

  const drawFrame = (index, frameList) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const images = frameList || imagesRef.current
    const safeIndex = Math.max(0, Math.min(Math.round(index), FRAME_COUNT - 1))
    const img = images[safeIndex]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const { width, height, ratio } = viewportRef.current
    if (!width || !height) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)

    const imgAspect = img.naturalWidth / img.naturalHeight
    const canvasAspect = width / height

    let drawWidth = 0
    let drawHeight = 0

    if (imgAspect > canvasAspect) {
      drawWidth = width
      drawHeight = width / imgAspect
    } else {
      drawHeight = height
      drawWidth = height * imgAspect
    }

    const drawX = (width - drawWidth) / 2
    const drawY = (height - drawHeight) / 2

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
    currentFrameRef.current = safeIndex
    setCurrentFrame((value) => (value === safeIndex ? value : safeIndex))
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setIsReducedMotion(mediaQuery.matches)

    updateMotionPreference()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMotionPreference)
      return () => mediaQuery.removeEventListener('change', updateMotionPreference)
    }

    mediaQuery.addListener(updateMotionPreference)
    return () => mediaQuery.removeListener(updateMotionPreference)
  }, [])

  useEffect(() => {
    let cancelled = false
    let loadedCount = 0
    const frames = new Array(FRAME_COUNT)

    for (let i = 0; i < FRAME_COUNT; i += 1) {
      const img = new Image()
      img.decoding = 'async'
      img.src = getFrameSrc(i)

      const handleComplete = () => {
        if (cancelled) return

        loadedCount += 1
        setLoadPct(Math.round((loadedCount / FRAME_COUNT) * 100))

        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = frames
          displayFrameRef.current = 0
          targetFrameRef.current = 0
          currentFrameRef.current = 0
          setLoaded(true)
          drawFrame(0, frames)
        }
      }

      img.onload = () => {
        frames[i] = img
        handleComplete()
      }

      img.onerror = () => {
        frames[i] = frames[i - 1] || null
        handleComplete()
      }
    }

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const width = window.innerWidth
      const height = window.innerHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)

      viewportRef.current = { width, height, ratio }
      setViewportHeight(height)

      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      }

      if (loaded) {
        drawFrame(currentFrameRef.current)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [loaded])

  useEffect(() => {
    if (!loaded) return undefined

    const updateVisuals = (progress) => {
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`
      }

      if (hintRef.current) {
        hintRef.current.style.opacity = progress > 0.05 ? '0' : '1'
      }
    }

    const smoothTick = () => {
      const diff = targetFrameRef.current - displayFrameRef.current

      if (Math.abs(diff) > 0.02) {
        displayFrameRef.current += diff * (isReducedMotion ? 1 : 0.16)
        drawFrame(displayFrameRef.current)
        updateVisuals(targetFrameRef.current / Math.max(FRAME_COUNT - 1, 1))
        rafRef.current = window.requestAnimationFrame(smoothTick)
        return
      }

      displayFrameRef.current = targetFrameRef.current
      drawFrame(displayFrameRef.current)
      updateVisuals(targetFrameRef.current / Math.max(FRAME_COUNT - 1, 1))
      rafRef.current = null
    }

    const onScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      const totalDistance = FRAME_COUNT * SCROLL_PER_FRAME
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(scrolled / totalDistance, 1)
      targetFrameRef.current = progress * (FRAME_COUNT - 1)

      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(smoothTick)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [isReducedMotion, loaded])

  const wrapperHeight = FRAME_COUNT * SCROLL_PER_FRAME + viewportHeight

  return (
    <section className="scroll-video" id="top">
      {!loaded && (
        <div className="scroll-video__loader" role="status" aria-live="polite">
          <div className="scroll-video__loader-label">Loading sequence</div>
          <div className="scroll-video__loader-bar" aria-hidden="true">
            <div className="scroll-video__loader-fill" style={{ transform: `scaleX(${loadPct / 100})` }} />
          </div>
          <div className="scroll-video__loader-value">{loadPct}%</div>
        </div>
      )}

      <div className="scroll-video__wrapper" ref={wrapperRef} style={{ height: wrapperHeight || '200vh' }} data-cursor="Play">
        <div className="scroll-video__sticky">
          <canvas
            ref={canvasRef}
            className="scroll-video__canvas"
            aria-label="Scroll-driven product animation"
          />
          <div className="scroll-video__vignette" aria-hidden="true" />
          <div className="scroll-video__overlay layout-grid">
            <div className="scroll-video__copy">
              <span className="eyebrow t-label">Frame Sequence / 27 Frames</span>
              <h1 className="t-hero scroll-video__title">Scroll through the reel like an Apple-style product film.</h1>
              <p className="t-body scroll-video__body">
                This hero locks to the viewport, maps scroll progress to real frames, and then releases naturally into the rest of the portfolio once the sequence finishes.
              </p>
            </div>
          </div>
          <div className="scroll-video__hud">
            <div className="scroll-video__counter t-label">
              {String(currentFrame + 1).padStart(2, '0')} / {String(FRAME_COUNT).padStart(2, '0')}
            </div>
            <div ref={hintRef} className="scroll-video__hint t-label">Scroll to play</div>
          </div>
          <div className="scroll-video__progress" aria-hidden="true">
            <div ref={progressBarRef} className="scroll-video__progress-bar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollVideo
