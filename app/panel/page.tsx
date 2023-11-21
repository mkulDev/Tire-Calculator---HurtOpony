'use client'

import React, { useState } from 'react'
import SitePath from '@/components/SitePath'
import { FaCheck } from 'react-icons/fa'

type FromData = {
  email: string
  pass: string
}

const Panel = () => {
  const [formData, setFormData] = useState<FromData>({
    email: '',
    pass: '',
  })

  const handleInputChange = (event: HTMLInputElement) => {
    const { name, value } = event
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    if (formData.email === '' || formData.pass === '') {
      alert('Proszę wypełnij wszytkie pola')
    }
    // register logic
    setFormData({ ...formData, email: '', pass: '' })
  }

  return (
    <>
      <SitePath site='Panel Klienta' />
      <div className='w-full sm:px-[10%] bg-white'>
        <img src='/assets/images/bg-register.jpg' className='w-full py-[30px]' />
        <div className='w-full bg-[#f3f5f7] flex flex-col items-center pb-[40px] mb-[40px] '>
          <h2 className='m-[50px] text-2xl font-[200]'>Zaloguj się do panelu Hurtopony.pl</h2>
          <div className='w-full flex flex-col md:flex-row items-center md:justify-around lg:justify-center lg:gap-[40px] gap-y-[30px]'>
            {/* Login form */}
            <div className='relative w-[80%] min-w-525:w-[60%] md:w-[45%] max-w-[500px] bg-white rounded-lg px-[5%] pb-[40px] hover:shadow-xl duration-300'>
              <h4 className='text-[22px] font-[600] my-[40px] text-center font-sans'>Mam już konto</h4>
              <div className='w-full flex flex-col text-[12px] mb-[13px]'>
                <label className='font-[500] '>Adres e-mail:</label>
                <input
                  className='w-full border-[1px] px-[10px] py-[5px] focus:border-[#1393ff] focus:outline-none '
                  placeholder='Wpisz adres e-mail'
                  onChange={(e) => handleInputChange(e.target)}
                  name='email'
                  value={formData.email}
                />
              </div>
              <div className='flex flex-col w-full text-[12px] mb-[13px]'>
                <label className='font-[500]'>Hasło:</label>
                <input
                  className='w-full border-[1px] px-[10px] py-[5px] focus:border-[#1393ff] focus:outline-none '
                  type='password'
                  onChange={(e) => handleInputChange(e.target)}
                  name='pass'
                  value={formData.pass}
                />
              </div>
              <p className='hover:underline hover:text-[#014c8c] duration-300 cursor-pointer text-[12px] my-[10px] '>
                Nie pamiętasz hasła?
              </p>
              <button
                onClick={handleSubmit}
                className='w-full bg-[#5cb85c] hover:bg-[#449d44] duration-300 text-[12px] text-white p-[5px] mb-[20px]'>
                Loguj
              </button>
              <p className='text-[12px] text-center'>Podaj dane i zaloguj</p>
              <div className='bg-[#e52f48] absolute left-[44%] top-0 w-[12%] h-[3px]'></div>
            </div>
            {/* Register form */}
            <div className='relative w-[80%] min-w-525:w-[60%] md:w-[45%] max-w-[500px] bg-white rounded-lg px-[5%] pb-[40px] hover:shadow-xl duration-300'>
              <h4 className='text-[22px] font-[600] my-[40px] text-center font-sans'>Chce założyć konto!</h4>

              <p className='hover:underline hover:text-[#014c8c] duration-300 cursor-pointer text-[12px] my-[10px] '>
                Zarejestruj się i otrzymaj <span className='text-[#449d44] font-[700]'>Gratis</span>
              </p>
              <div className=' flex flex-col gap-2'>
                <div className='flex items-center text-[12px]'>
                  <FaCheck className='text-[#449d44] mr-2' />
                  <p className=' font-[700]'>1% zwrotu z zakupów na kolejne zamówienie</p>
                </div>
                <div className='flex items-center text-[12px]'>
                  <FaCheck className='text-[#449d44] mr-2' />
                  <p className=''>Śledzenie twoich zamówień</p>
                </div>
                <div className='flex items-center text-[12px]'>
                  <FaCheck className='text-[#449d44] mr-2' />
                  <p className=''>Specjalne oferty</p>
                </div>
                <div className='flex items-center text-[12px]'>
                  <FaCheck className='text-[#449d44] mr-2' />
                  <p className=''>Ubezpieczone przesyłki</p>
                </div>
                <div className='flex items-center text-[12px] mb-[20px]'>
                  <FaCheck className='text-[#449d44] mr-2' />
                  <p className=''>Darmowa dostawa i szybkie zamawianie</p>
                </div>
              </div>
              <button className='w-full bg-[#f0ad4e] hover:bg-[#ec971f] duration-300 text-[12px] text-white p-[5px] mb-[20px]'>
                Chce założyć konto!
              </button>
              <p className='text-[12px] text-center'>Podaj dane i zaloguj</p>
              <div className='bg-[#e52f48] absolute left-[44%] top-0 w-[12%] h-[3px]'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Panel
