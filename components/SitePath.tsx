import Link from 'next/link'
import React from 'react'
type sitePathProps = {
  site: string
}
export const SitePath = ({ site }: sitePathProps) => {
  return (
    <div className='w-full bg-[#f7f7f7] flex px-[10%] text-[13px] py-[15px] '>
      <Link href='/' title='Sklep z oponami - hurtopony.pl' className=' hover:underline'>
        <span>Opony</span>
      </Link>
      <span className='px-1'>{` > `}</span>
      <span>{site}</span>
    </div>
  )
}

export default SitePath
