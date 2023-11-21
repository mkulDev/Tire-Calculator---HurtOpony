import React from 'react'
import NavBtn from './NavBtn'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full pt-[70px] bg-white py-2'>
      <div className='h-[78px] flex items-center w-full '>
        <div className='flex justify-between items-center w-full  px-[10%] '>
          <div className='flex flex-col justify-between gap-3'>
            <h1 className='text-[40px] text-[red] font-Ravenwood leading-[40px] font-[600] tracking-wide'>
              HURT<span className=' font-sans text-black tracking-normal'>OPONY</span>
            </h1>
            <p className='text-[12px] '>Opony detaliczne i hurtowe dla każdego.</p>
          </div>

          <div className='flex items-center w-full justify-end gap-1 min-w-850:gap-3'>
            <NavBtn title='Panel Klienta' path='/panel' icon={faLock} />
            <NavBtn title='Strona Główna' path='/' />
            <NavBtn title='O nas' path='/onas' />
            <NavBtn title='Regulamin' path='/regulamin' />
            <NavBtn title='Kontakt' path='/kontakt' />
            <p></p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
