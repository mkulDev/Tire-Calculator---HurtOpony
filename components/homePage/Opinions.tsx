import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialGooglePlus } from 'react-icons/ti'
import Image from 'next/image'
const Opinions = () => {
  return (
    <div className='px-[10%]'>
      <hr className='mb-[30px]' />
      <h2 className='text-[40px] font-[200]'>Opinie klientów</h2>
      <p className=''>
        Zbieramy opinie na temat naszej firmy. Staramy sie stale podnosić jakość usług aby dostarczyć naszym klientom to
        co najlepsze czyli dobre opony, które zapewnią im bezpieczeństwo i zapewnią optymalny komfort jazdy. Wasza
        opinia na temat Hurtopony jest bardzo ważna. Dzięki waszym opiniom o oponach, produktach i usługach, podnosimy
        stale jakość oferowanego towaru.
      </p>
      <div className='flex flex-wrap items-start justify-between gap-x-5 gap-y-[50px] mt-[60px] mb-[30px]'>
        <div className='relative w-full md:w-[48%] border-[1px] flex flex-col items-center hover:grayscale hover:bg-gray-200 hover:border-gray-400 duration-300 '>
          <p className='text-[16px] font-[700] pt-[50px]'>Ocena 5.0</p>
          <div className='flex m-5'>
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
          </div>
          <div className='flex flex-col gap-5 px-[10%] pb-[30px] text-center text-[13px] font-[300]'>
            <p>
              Hurtopony zbiera opinie na facebooku od 2008 roku. Staramy sie dostarczać naszym klientom nie tylko opony
              ale również doskonałą jakość obsługi. Dla klientów którzy subskrybują nasz kanał na fb przygotowujemy
              specjalne oferty na ogumienie oraz konkursy. Polub nas już dziś. Bardzo życzliwa i pomocna obsługa. 100%
              satysfakcji. Towar zgodny z opisem. Firma godna zaufania, polecam. Szybka i sprawna wysyłka. Towar zgodny
              z opisem. Polecam.
            </p>
            <p>Bardzo życzliwa i pomocna obsługa. 100% satysfakcji.</p>
            <p>Towar zgodny z opisem. Firma godna zaufania, polecam.</p>
            <p>Szybka i sprawna wysyłka. Towar zgodny z opisem. Polecam.</p>
          </div>
          <div className=' absolute top-[-40px] w-[80px] h-[80px] flex justify-center items-center bg-[#ed1820] rounded-full border-[8px] border-white'>
            <FaFacebookF size={32} className='text-white' />
          </div>
        </div>
        <div className='relative w-full md:w-[48%] border-[1px] flex flex-col items-center hover:grayscale hover:bg-gray-200 hover:border-gray-400 duration-300 '>
          <p className='text-[16px] font-[700] pt-[50px]'>Ocena 4.6</p>
          <div className='flex m-5'>
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
            <IoStar size={14} className='text-[#666666]' />
            <IoStarHalf size={14} className='text-[#666666]' />
          </div>
          <div className='flex flex-col gap-5 px-[10%] pb-[30px] text-center text-[13px] font-[300]'>
            <img src='/assets/images/googleplus.png' alt='opinion-screenshot' className='w-full' />
          </div>
          <div className=' absolute top-[-40px] w-[80px] h-[80px] flex justify-center items-center bg-[#ed1820] rounded-full border-[8px] border-white'>
            <TiSocialGooglePlus size={32} className='text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opinions
