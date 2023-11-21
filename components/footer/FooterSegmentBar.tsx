import Link from 'next/link'
import React from 'react'

type FooterSegmentBarProps = {
  title: string
  data: {
    name: string
    path: string
  }[]
}

const FooterSegmentBar = ({ title, data }: FooterSegmentBarProps) => {
  return (
    <div className='flex flex-col items-start justify-start   w-[200px] text-[12px] mb-[30px]'>
      <h6 className='text-[#d9d6d6] text-[21px] font-[700] mb-[21px] '>{title}</h6>
      {data.map((element, index) => (
        <Link
          href={element.path}
          key={element.name}
          className='text-[#a0a3a4] hover:text-[#d9d6d6] hover:underline duration-300 pb-2'>
          {element.name}
        </Link>
      ))}
    </div>
  )
}

export default FooterSegmentBar
