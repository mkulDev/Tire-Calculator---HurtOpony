const slider = [
  '/assets/images/brands/cultor.jpg',
  '/assets/images/brands/goodride.jpg',
  '/assets/images/brands/hankook.jpg',
  '/assets/images/brands/infinity.jpg',
  '/assets/images/brands/kabat-logo.jpg',
  '/assets/images/brands/matador.jpg',
  '/assets/images/brands/metzeler.jpg',
  '/assets/images/brands/nankang.jpg',
  '/assets/images/brands/nexen.jpg',
  '/assets/images/brands/pirelli.jpg',
  '/assets/images/brands/wanli.jpg',
]

const getRandomsBrand = (arr: string[], number: number) => {
  let newArr: string[] = []

  while (newArr.length < number) {
    const index = Math.floor(Math.random() * arr.length)
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index])
    }
  }
  return newArr
}
const slids = getRandomsBrand(slider, 4)

const BrandBar = () => {
  return (
    <div className='h-auto py-[15px]'>
      <p className='text-[14px] text-center pb-[20px]'>Hurtopony.pl - nowe i tanie opony markowe.</p>
      <div className='flex flex-wrap w-full gap-x-5 gap-y-3 items-center justify-center pb-[15px]'>
        <div className='flex items-center gap-5'>
          <img src={slids[0]} alt='brand-logo' className=' w-[100px] md:w-[150px] grayscale cursor-pointer' />
          <img src={slids[1]} alt='brand-logo' className=' w-[100px] md:w-[150px] grayscale cursor-pointer' />
        </div>
        <div className='flex items-center gap-5'>
          <img src={slids[2]} alt='brand-logo' className='  w-[100px] md:w-[150px] grayscale cursor-pointer' />
          <img src={slids[3]} alt='brand-logo' className=' w-[100px] md:w-[150px] grayscale cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default BrandBar
