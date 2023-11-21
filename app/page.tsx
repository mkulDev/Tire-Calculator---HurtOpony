import Image from 'next/image'
import Poster from '../public/assets/images/poster.webp'
import BrandBar from '@/components/homePage/BrandBar'
import HomeInfo from '@/components/homePage/HomeInfo'
import Opinions from '@/components/homePage/Opinions'
import Carusel from '@/components/homePage/Carusel'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between bg-white'>
      <div className='w-full h-[295px]'>
        <video poster='/assets/images/poster.webp' autoPlay loop className='w-full h-[295px] object-cover'>
          <source src='/assets/video/poster.MOV' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='w-full px-[10%'>
        <BrandBar />
        <HomeInfo />
        <Opinions />
        <Carusel />
      </div>
    </div>
  )
}
