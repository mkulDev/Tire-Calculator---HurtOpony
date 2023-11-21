import React from 'react'
import { faLocationDot, faPhone, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const FooterContactBar = () => {
  return (
    <div className='flex flex-col items-start justify-start  w-[200px] text-[12px] text-[#d9d6d6] pb-[30px]'>
      <h6 className='text-[#d9d6d6] text-[21px] font-[700] mb-[21px]'>Hurtopony</h6>
      <p className='pb-3'>Skontaktuj się z nami chętnie odpowiemy na każde Twoje pytanie.</p>
      <div className='flex flex-col items-start gap-2 text-[#a0a3a4] text-[12px]'>
        <div className='flex items-start gap-3 '>
          <FontAwesomeIcon icon={faLocationDot} className='pt-[2px]' />
          <p>41-203, Baczyńskiego 25A, Sosnowiec</p>
        </div>
        <div className='flex items-start gap-3'>
          <FontAwesomeIcon icon={faPhone} className='pt-[2px]' />
          <p>
            Phone (Poland) :<Link href='tel:+48327061018'> 32 706 10 18</Link>
          </p>
        </div>
        <div className='flex items-start gap-3'>
          <FontAwesomeIcon icon={faEnvelope} className='pt-[2px]' />
          <p>E-mail : sklep@hurtopony.pl</p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-3'>
        <FontAwesomeIcon icon={faCcVisa} className='text-2xl' />
        <FontAwesomeIcon icon={faCcMastercard} className='text-2xl' />
        <FontAwesomeIcon icon={faMoneyBill} className='text-2xl' />
      </div>
    </div>
  )
}

export default FooterContactBar
