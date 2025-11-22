import React from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import LazyMount from './LazyMount'
import CanvasGate from './CanvasGate'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* Only mount the heavy WebGL canvas when the icon is visible in viewport */}
          <LazyMount>
            <CanvasGate>
              <BallCanvas icon={technology.icon} />
            </CanvasGate>
          </LazyMount>
        </div>
      ))}
    </div>
  )
}

export default Tech