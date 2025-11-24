import React, { Suspense, lazy } from 'react'

// Import BallCanvas lazily from its module so the Tech chunk doesn't
// statically pull the entire `./canvas` index and vendor libs.
const BallCanvas = lazy(() => import('../../components/canvas/Ball').then(m => ({ default: m.default || m.BallCanvas })))
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import LazyMount from '../../components/LazyMount'
import CanvasGate from '../../components/CanvasGate'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* Only mount the heavy WebGL canvas when the icon is visible in viewport */}
          <LazyMount>
            <CanvasGate>
              <Suspense fallback={null}>
                <BallCanvas icon={technology.icon} name={technology.name} />
              </Suspense>
            </CanvasGate>
          </LazyMount>
        </div>
      ))}
    </div>
  )
}

export default Tech