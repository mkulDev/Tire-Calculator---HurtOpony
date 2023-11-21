import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
const FooterSocialBar = () => {
  return (
    <div className='flex flex-col items-start justify-start  w-[200px] text-[12px] '>
      <h6 className='text-[#d9d6d6] text-[21px] font-[700] mb-[21px]'>Social Meadia</h6>

      <div className='flex justify-center gap-3'>
        <Link href='https://www.facebook.com/hurtopony/'>
          <Image src='/assets/images/facebook.png' width={30} height={30} alt='facebook icon' />
        </Link>

        <Image src='/assets/images/google+.png' width={30} height={30} alt='facebook icon' />
      </div>
    </div>
  )
}

export default FooterSocialBar
