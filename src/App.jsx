import { useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import CursorImageTrail from './components/CursorImageTrail'
import Work from './components/Work'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [preloaderDone, setPreloaderDone] = useState(
    sessionStorage.getItem('dushyant-preloader-seen') === 'true'
  )

  useEffect(() => {
    if (preloaderDone) {
      document.body.classList.add('is-ready')
      return
    }

    const onComplete = () => {
      setPreloaderDone(true)
      document.body.classList.add('is-ready')
    }

    window.addEventListener('preloaderComplete', onComplete)
    return () => window.removeEventListener('preloaderComplete', onComplete)
  }, [preloaderDone])

  return (
    <>
      <CustomCursor />
      {!preloaderDone && <Preloader />}
      <main className={`site-shell ${preloaderDone ? 'site-shell--ready' : ''}`}>
        <Hero />
        <CursorImageTrail />
        <Work />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  )
}

export default App
