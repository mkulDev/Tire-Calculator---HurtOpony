import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-10'>
      <div className='flex justify-center sm:justify-between text-black px-[14px] py-[2px] w-full sm:px-[10%] gap-8 bg-[#f7f7f7] text-[14px] sm:text-[18px]  place-items-baseline '>
        <Link href='mailto:sklep@hurtopony.pl' className=' hidden lg:flex self-center'>
          <FontAwesomeIcon icon={faEnvelope} className=' text-[22px] self-center ' />
          <p className=' font-sans font-bold p-2 pr-3'> sklep@hurtopony.pl </p>
        </Link>

        <div className='flex items-baseline'>
          <p className=' font-sans  font-bold pr-4 hidden lg:block text-[16px]'> Infolinia: </p>
          <Link href='tel:+48327061018' className='flex items-baseline '>
            <FontAwesomeIcon icon={faPhoneSquare} className=' text-[22px] self-center ' />
            <p className=' font-sans font-bold p-2 sm: lg:pr-3'>32 706 10 18</p>
          </Link>
          <p className=' pl-4 font-normal hidden xl:block text-sm'> Pn-Pt: 8-16 oraz Sb: 8-14: </p>
        </div>

        <div className='flex items-baseline'>
          <FontAwesomeIcon icon={faTruck} flip='horizontal' className=' text-[22px] self-center' />
          <p className=' font-sans  font-bold p-2  lg:pr-3'> Dostawa Gratis </p>
        </div>

        <div className='hidden lg:flex'>
          <p className=' font-sans font-bold  '>
            Raty<span className='text-base font-bold font-sans pl-1  pr-3'>0%</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopBar
