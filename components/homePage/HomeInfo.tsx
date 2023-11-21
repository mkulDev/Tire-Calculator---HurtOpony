import { IoCalendarOutline } from 'react-icons/io5'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { HiOutlineTruck } from 'react-icons/hi2'

const HomeInfo = () => {
  return (
    <div className='px-[10%] py-[30px] flex flex-col lg:flex-row gap-10'>
      <div className='flex flex-col w-full lg:w-[30%] items-center  '>
        <HiOutlineTruck className='text-[65px] text-center scale-x-[-100%]' />
        <h2 className='font-[200] text-2xl pb-[15px]'>Transport Gratis</h2>
        <p className='text-justify'>
          W naszej hurtowni opon gwarantujemy Ci nie tylko produkty najwyższej jakości, ale także wyjątkowe korzyści.
          Jeśli zdecydujesz się na zakup min 2 szt. opon online, transport do Twojego miejsca docelowego jest całkowicie
          darmowy. Co więcej, jeśli potrzebujesz opon osobowych, nawet przy zakupie jednej sztuki, transport również
          jest gratis. Współpracujemy z przewoźnikami, którzy dostarczą zamówione przez Ciebie opony bezpośrednio pod
          drzwi Twojego domu lub do Twojego firmowego magazynu.
        </p>
      </div>
      <div className='flex flex-col w-full lg:w-[30%] items-center  '>
        <IoCalendarOutline className='text-[65px] text-center' />
        <h2 className='font-[200] text-2xl pb-[15px]'>14 dni na zwrot</h2>
        <p className='text-justify'>
          W naszym sklepie z oponami zależy nam na Twojej pełnej satysfakcji, dlatego oferujemy elastyczną politykę
          zwrotów i wymiany opon. Jeśli z jakiegoś powodu opony, które zakupiłeś, nie spełniają Twoich oczekiwań, nie
          martw się – masz aż 14 dni na ich zwrot lub wymianę. Nie musisz podawać powodu zwrotu, ponieważ w pełni
          szanujemy Twoje prawa jako Konsumenta, zgodnie z polskim prawem.
        </p>
      </div>
      <div className='flex flex-col w-full lg:w-[30%] items-center '>
        <HiOutlineRocketLaunch className='text-[65px] text-center' />
        <h2 className='font-[200] text-2xl pb-[15px]'>Szybka wysyłka</h2>
        <p className='text-justify'>
          W naszym zaawansowanym procesie logistycznym skupiamy się na dostarczeniu Twojego zamówienia w najkrótszym
          możliwym czasie. Jesteśmy w stanie wysłać towar do Ciebie w ciągu zaledwie 24 godzin, a nawet tego samego
          dnia! Dla nas priorytetem jest, abyś mógł jak najszybciej cieszyć się swoimi nowymi oponami.
        </p>
      </div>
    </div>
  )
}

export default HomeInfo
