import { useEffect, useRef } from 'react'
import { labProjects } from '../data/portfolio'

const isVideo = (path) => /\.(mp4|webm|ogg)$/i.test(path)

function Projects() {
  const sectionRef = useRef(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const videos = videoRefs.current.filter(Boolean)

    if (!section || videos.length === 0) {
      return undefined
    }

    // Wait for videos to be ready before playing
    const readyVideos = new Set()
    const onCanPlay = (video) => {
      readyVideos.add(video)
      if (section && observer) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          video.play().catch(() => {})
        }
      }
    }

    videos.forEach((video) => {
      video.addEventListener('canplay', () => onCanPlay(video))
      video.addEventListener('loadeddata', () => onCanPlay(video))
      // Try to load the video
      video.load()
    })

    const playVideos = () => {
      videos.forEach((video) => {
        if (video.readyState >= 2) {
          const playPromise = video.play()
          if (playPromise?.catch) {
            playPromise.catch(() => {})
          }
        }
      })
    }

    const pauseVideos = () => {
      videos.forEach((video) => {
        video.pause()
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideos()
          return
        }
        pauseVideos()
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    observer.observe(section)

    // Initial check
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      playVideos()
    }

    return () => {
      observer.disconnect()
      pauseVideos()
      videos.forEach((video) => {
        video.removeEventListener('canplay', () => onCanPlay(video))
        video.removeEventListener('loadeddata', () => onCanPlay(video))
      })
    }
  }, [])

  return (
    <section className="projects section layout-grid" id="projects" ref={sectionRef}>
      <div className="projects__heading">
        <div>
          <span className="projects__eyebrow t-mono">WORK & VISUAL FEED</span>
          <h2 className="projects__title">Built with discipline. Presented with edge.</h2>
        </div>
        <p className="projects__intro t-body">
          A stoic visual archive of systems, interfaces, and experiments. Hover each card to reveal
          the underlying build story.
        </p>
      </div>

      <div className="projects__feed">
        {labProjects.map((project, index) => (
          <article
            className={`project-card ${index === 0 ? 'project-card--featured' : ''}`}
            key={project.id}
          >
            <div className="project-card__frame">
              <div className="project-card__meta">
                <span className="project-card__index t-mono">{project.id}</span>
                <span className="project-card__tag t-mono">{project.highlight}</span>
              </div>

              <div className="project-card__visual">
                {project.media && isVideo(project.media) ? (
                  <video
                    className="project-card__media"
                    ref={(node) => {
                      videoRefs.current[index] = node
                    }}
                    src={project.media}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    onLoadedData={(e) => {
                      e.target.play().catch(() => {})
                    }}
                  />
                ) : (
                  <img className="project-card__media" src={project.media} alt={project.title} />
                )}

                <div className="project-card__veil" aria-hidden="true" />

                <div className="project-card__hover-panel">
                  <p className="project-card__summary t-body">{project.summary}</p>
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__stack" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <span className="project-card__chip t-mono" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-card__actions">
                  {project.links.map((link) => (
                    <a
                      className="project-card__link magnetic"
                      href={link.href}
                      key={`${project.id}-${link.label}`}
                      data-cursor="Open"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects