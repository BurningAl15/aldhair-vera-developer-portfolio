import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CanvasPoolProvider } from './components/CanvasPool'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-the-fold sections to reduce initial bundle
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Tech = lazy(() => import('./components/Tech'))
const Works = lazy(() => import('./components/Works'))
const Contact = lazy(() => import('./components/Contact'))
const SocialMedia = lazy(() => import('./components/SocialMedia'))
const Footer = lazy(() => import('./components/Footer'))

// Lazy-load StarsCanvas from its specific module to avoid bundling
// the entire `./components/canvas` index (which imports all canvases).
const StarsCanvas = lazy(() => import('./components/canvas/Stars').then(m => ({ default: m.default || m.StarsCanvas })))

const App = () => {
  return (
    <BrowserRouter>
      <CanvasPoolProvider maxSlots={4}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <Suspense fallback={<div />}>
            <About />
          </Suspense>

          <Suspense fallback={<div />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<div />}>
            <Tech />
          </Suspense>

          <Suspense fallback={<div />}>
            <Works />
          </Suspense>

          {/* <Feedbacks/> */}

          <div className="relative z-0">
            <Suspense fallback={<div />}>
              <Contact />
            </Suspense>
            <Suspense fallback={<div />}>
              <StarsCanvas />
            </Suspense>
          </div>

          <div className="relative z-0">
            <Suspense fallback={<div />}>
              <SocialMedia />
            </Suspense>
            <Suspense fallback={<div />}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </CanvasPoolProvider>
    </BrowserRouter>
  )
}

export default App
