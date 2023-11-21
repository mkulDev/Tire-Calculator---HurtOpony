import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className='flex items-center justify-center w-full h-[600px] bg-neutral-50'>
      <h1 className='border-r-[1px] border-[rgba(255, 255, 255, 0.3)] inline-block m-0 mr-4 pr-4 text-xl leading-none'>
        404
      </h1>

      <div className='inline-block'>
        <h2 className='text-sm font-normal leading-none m-0'>This page could not be found.</h2>
      </div>
    </div>
  )
}
