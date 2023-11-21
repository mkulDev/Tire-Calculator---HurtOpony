import SitePath from '@/components/SitePath'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <SitePath site='O nas' />

      <div className='px-[10%] xl:px-[20%] bg-white text-[14px] pb-[15px]'>
        <h2 className='text-2xl font-[700] my-[30px] text-center'>Witamy w sklepie hurtopony.pl</h2>

        <div className='flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center'>
          <img src='/assets/images/stock.jpg' className='w-full md:w-1/2' />
          <div className='w-full md:w-1/2'>
            <h3 className='text-xl font-[700] pb-[14px]'>Dlaczego u nas kupować?</h3>
            <p className=' text-justify '>
              Kupując opony na Hurtopony.pl kupujesz w Hurtowni Opon z najbardziej rozwiniętą bazą logistyczną
              oszczędzasz swój czas i pieniądze. Opony dostarczamy w każde miejsce w możliwie najkrótszym terminie.
              Posiadamy doświadczenie w branży poparte latami praktyki. Zostaniesz obsłużony przez profesjonalną ekipę
              która pomoże ci dobrać najlepsze opon dla twojego pojazdu.
            </p>
          </div>
        </div>

        <hr className='mt-[30px]' />
        <h3 className='text-xl font-[700] pt-[30px]  text-center'>Otrzymujesz bezpłatnie:</h3>
        <h4 className='text-base font-[700] py-[10px] text-center'>Wysyłka w 24h.</h4>
        <p className=' text-center'>
          Naszych klientów obsługujemy z największa starannością. Opony będące na magazynie wysyłamy w 24H. Możesz
          cieszyć się swoimi oponami w najbliższych dniach.
        </p>
        <hr className='mt-[30px]' />

        <h4 className='text-xl font-[700] py-[30px] text-center'>Monitorowania przesyłki online.</h4>
        <div className='flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center'>
          <div className='w-full md:w-1/2'>
            <p className=' text-justify '>
              Zaraz po wysłaniu towaru za pośrednictwem naszej bazy logistycznej i międzynarodowej firmy kurierskiej
              Fedex otrzymujesz na podanego przez ciebie e-maila fakturę oraz na fakturze numer listu przewozowego
              dzięki czemu wiesz co się dzieje z twoja przesyłką.
            </p>
          </div>
          <img src='/assets/images/online.jpg' className='w-full md:w-1/2' />
        </div>

        <hr className='mt-[30px]' />
        <h4 className='text-xl font-[700] py-[30px] text-center'>Ubezpieczenie przesyłki.</h4>
        <p className=' text-center'>
          Dbamy aby towar który zakupiłeś został dostarczony w najlepszym stanie. Dlatego wszystkie nasze przesyłki są
          ubezpieczone nie musisz się martwić o twoja opony. Tylko u nas dostajesz ubezpieczone paczki zupełnie za
          darmo.
        </p>
        <hr className='mt-[30px]' />

        <h2 className='text-xl font-[700] py-[30px] text-center'>Bezpieczeństwo transakcji.</h2>
        <div className='flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center'>
          <div className='w-full md:w-1/2'>
            <p className=' text-justify '>
              Wszystkie nasze transakcje są zabezpieczone specjalnym algorytmem. Płatności obsługuje system Przelewy24.
              Możesz również zapłacić kartą Visa lub MasterCard etc. Możesz również płacić ratalnie lub porostu
              kurierowi przy odbiorze.
            </p>
          </div>
          <img src='/assets/images/karty2.jpg' className='w-full md:w-1/2' />
        </div>
        <hr className='mt-[30px]' />
        <div className='flex flex-col items-center'>
          <hr className='mt-[30px]' />
          <h4 className='text-xl font-[700] py-[15px] '>Możliwość zwrotu towaru 14 dni.</h4>
          <Image src='/assets/images/zwrot.png' width={200} height={200} alt='zwrot' />
          <p className='text-center'>
            Masz aż 14 dni na zwrot towaru jako osoba fizyczna. Jeżeli nie spodoba cie się produkt który zakupiłeś po
            prostu napisz na reklamacje@hurtopony.pl a tam kompetentna osoba odpowiedzialna za reklamację zajmie się
            twoją sprawą.
          </p>
          <hr className='mt-[30px]' />
        </div>

        <hr className='' />
        <div className='flex flex-col items-center my-[30px]'>
          <h4 className='text-xl font-[700] pb-[15px]'>Bezpłatna usługa.</h4>
          <p className='text-center'>
            Doboru opon do ciągnika, motocykla, koparki, samochodu i innych pojazdów. Nie wiesz jakie opony powinny być
            założone, jakie powinny pasować do twojego pojazdu. Nasi konsultanci udzielą ci wyczerpujących informacji.
            Tylko nasza firma dysponuje bazą opon praktycznie wszystkich pojazdów począwszy od ciągników rolniczych,
            koparek, samochodów osobowych po motocykle.
          </p>
        </div>
        <hr className='' />

        <h2 className='text-xl font-[700] py-[30px] text-center'>Mobilność w każdym wydaniu.</h2>
        <div className='flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center mb-[30px]'>
          <img src='/assets/images/karty.jpg' className='w-full md:w-1/2' />
          <div className='w-full md:w-1/2'>
            <p className=' text-justify '>
              Kupując opony na Hurtopony.pl kupujesz w Hurtowni Opon z najbardziej rozwiniętą bazą logistyczną
              oszczędzasz swój czas i pieniądze. Opony dostarczamy w każde miejsce w możliwie najkrótszym terminie.
              Posiadamy doświadczenie w branży poparte latami praktyki. Zostaniesz obsłużony przez profesjonalną ekipę
              która pomoże ci dobrać najlepsze opon dla twojego pojazdu.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
