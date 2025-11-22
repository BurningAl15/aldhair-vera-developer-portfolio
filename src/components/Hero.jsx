import React from 'react'

import { styles } from '../styles';
import ClientOnly from './ClientOnly';
import CanvasLoader from './CanvasLoader';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 my-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Aldhair Vera</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, mobile apps, <br className='sm:block hidden' />
            videogames and VR Experiences
          </p>
        </div>
      </div>

      <ClientOnly>
        {/** Dynamically import the heavy 3D canvas to keep it out of the initial JS payload */}
        <CanvasLoader />
      </ClientOnly>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' aria-label='Scroll to about section'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <div className='w-3 h-3 rounded-full bg-secondary mb-1 bounce-dot' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero