import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

type NavBtnProps = {
  icon?: any
  title: string
  path: string
}

const NavBtn = ({ icon, title, path }: NavBtnProps) => {
  return (
    <Link
      href={path}
      className={`flex items-center py-[6px] ${
        icon ? 'border-[1px] border-[#ccc] px-1 min-w-850:px-3' : 'border-none hidden md:flex'
      } cursor-pointer hover:opacity-60 duration-300 `}>
      {icon && <FontAwesomeIcon icon={icon} className=' text-[16px] self-center pr-1' />}
      <p className=' font-sans text-[13px] hidden md:block'> {title} </p>
    </Link>
  )
}

export default NavBtn
