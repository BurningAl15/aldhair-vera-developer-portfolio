import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CanvasPoolProvider } from './components/CanvasPool'
import Navbar from './layout/Navbar'
import Hero from './features/landing/Hero'
import SEO from './components/SEO'

// Lazy-load below-the-fold sections to reduce initial bundle
const About = lazy(() => import('./features/about/About'))
const Experience = lazy(() => import('./features/experience/Experience'))
const Tech = lazy(() => import('./features/experience/Tech'))
const Works = lazy(() => import('./features/projects/Works'))
const Contact = lazy(() => import('./features/contact/Contact'))
const SocialMedia = lazy(() => import('./layout/SocialMedia'))
const Footer = lazy(() => import('./layout/Footer'))

// Lazy-load StarsCanvas from its specific module to avoid bundling
// the entire `./components/canvas` index (which imports all canvases).
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => {
  return (
    <BrowserRouter>
      <CanvasPoolProvider maxSlots={4}>
        <div className="relative z-0 bg-primary">
          <SEO
            title="Portfolio"
            description="Aldhair Vera's 3D Developer Portfolio. Expert in React, Three.js, and Game Development."
          />
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
