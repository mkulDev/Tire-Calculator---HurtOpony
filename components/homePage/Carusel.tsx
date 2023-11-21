'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Transition } from '@headlessui/react'

const caruselSlides = [
  '/assets/images/carusel/banner-hurtopony.webp',
  '/assets/images/carusel/bnp-opony-na-raty.webp',
  '/assets/images/carusel/leaselink_banner.webp',
]

const Carusel = () => {
  const [slide, setSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) {
      return
    }

    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth
      const left = slider.clientWidth

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        slider.scrollBy({ left, behavior: 'smooth' })
      }

      setTimeout(moveSlide, 4000)
    }

    const intervalId = setTimeout(moveSlide, 4000)

    return () => {
      clearTimeout(intervalId)
    }
  }, [])

  return (
    <div className='w-full px-[10%]'>
      <div className='w-full overflow-hidden flex flex-nowrap text-center' ref={sliderRef}>
        <div className='flex-none w-full flex flex-col items-center justify-center border-[2px] border-white '>
          <img src={caruselSlides[0]} alt='slider' className='w-full' />
        </div>

        <div className='flex-none w-full flex flex-col items-center justify-center border-[2px] border-white'>
          <img src={caruselSlides[1]} alt='slider' className='w-full' />
        </div>

        <div className='flex-none w-full flex flex-col items-center justify-center border-[2px] border-white'>
          <img src={caruselSlides[2]} alt='slider' className='w-full  ' />
        </div>
      </div>
    </div>
  )
}

export default Carusel
