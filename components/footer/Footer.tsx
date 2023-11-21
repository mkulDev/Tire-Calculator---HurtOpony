import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import FooterSegmentBar from './FooterSegmentBar'
import FooterSocialBar from './FooterSocialBar'
import FooterContactBar from './FooterContactBar'

const footerBtns = [
  {
    title: 'Kategorie Opom',
    data: [
      { name: 'Opony', path: '/' },
      { name: 'Opony osobowe', path: '/produkty/osobowe' },
      { name: 'Opony dostawcze', path: '/produkty/dostawcze' },
      { name: 'Opony ciężarowe', path: '/produkty/ciezarowe' },
      { name: 'Opony rolnicze', path: '/produkty/rolnicze' },
      { name: 'Opony przemysłowe', path: '/produkty/przemyslowe' },
      { name: 'Opony terenowe', path: '/produkty/terenowe' },
      { name: 'Opony motocyklowe', path: '/produkty/motocyklowe' },
    ],
  },
  {
    title: 'Typy Opon',
    data: [
      { name: 'Opony do wózków widłowych', path: 'do-wozkow-widlowych' },
      { name: 'Opony do skuterów', path: 'do-skuterow' },
      { name: 'Opony do quadów', path: 'do-quadow' },
      { name: 'Opony do gokartów', path: 'do-gokartow' },
      { name: 'Opony do kosiarek', path: 'do-kosiarek' },
      { name: 'Opony specjalne', path: '/specjalne' },
    ],
  },
  {
    title: 'Porady',
    data: [
      { name: 'Dobór opon do samochodów', path: '/opony-do-samochodu' },
      { name: 'Dobór opon do ciągnika', path: '/opony-do-ciagnika' },
      { name: 'Dobór opon do motocykli', path: '/opony-do-motocykli' },
      { name: 'Artykuły o oponach', path: '/artykul' },
      { name: 'Najczęściej zadawane pytania', path: '/faq' },
    ],
  },
]

const links = [
  { name: 'opony rolnicze 13.6 38', href: '#' },
  { name: 'opony do ciągnika Limb', href: '#' },
  { name: 'opony do ciągnika Someca', href: '#' },
  { name: 'opony osobowe 175 50 13', href: '#' },
  { name: 'opony do Toyota Camry Gracia', href: '#' },
  { name: 'opony rolnicze 13.6 38', href: '#' },
  { name: 'opony do Toyota Carina', href: '#' },
  { name: 'opony do Toyota Carina II', href: '#' },
  { name: 'opony do Toyota Carina E', href: '#' },
]

const Footer = () => {
  return (
    <footer className=' '>
      <div className='w-full bg-[#f7f7f7] text-black px-[10%] text-[12px] pt-[10px] pb-[20px]'>
        <p className='text-center font-[700] text-[16px] mb-1'>Inne:</p>
        <div className='w-full flex gap-x-4 flex-wrap justify-center'>
          {links.map((link, index) => (
            <Link href={link.href} key={index} className='hover:underline duration-300'>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='w-full h-[150px] md:h-[190px] bg-footerImage bg-cover bg-no-repeat bg-center flex items-center justify-center '>
        <div className=' w-full h-full flex items-center justify-center text-[24px] sm:text-[36px] md:text-[45px] text-white font-[500] bg-gradient-to-b from-[#575e63] via-[#020202de] to-transparent'>
          <FontAwesomeIcon icon={faPhone} className='text-[24px] sm:text-[36px] md:text-[45px]' />
          <span className=' px-2 md:px-4'> Infolinia: </span>
          <Link href={'tel:+48327061018'} title='Sklep z oponami - hurtopony.pl'>
            <span className=''>32 706 10 18</span>
          </Link>
        </div>
      </div>
      <div className='w-full bg-[#494b4b] md:px-[10%] flex flex-wrap items-start justify-center min-w-525:justify-between pt-[50px] pb-[30px] px-[10%] gap-5'>
        <FooterContactBar />
        {footerBtns.map((segment) => (
          <FooterSegmentBar title={segment.title} data={segment.data} key={segment.title} />
        ))}
        <FooterSocialBar />
        <div className=' overflow-hidden w-[200px] min-w-1350:hidden'></div>
      </div>
    </footer>
  )
}

export default Footer
