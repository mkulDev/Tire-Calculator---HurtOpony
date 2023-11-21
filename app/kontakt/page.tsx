'use client'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import SitePath from '@/components/SitePath'
import Link from 'next/link'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 50.29339103841217,
  lng: 19.083371972664228,
}

const markerPosition = {
  lat: 50.29299103841217,
  lng: 19.083371972664228,
}

const Kontakt = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBMCV8_h3SG9B6WuGY_qSncVdx1mpkpFAk',
  })

  return (
    <>
      <SitePath site='Kontakt' />
      <div className='px-[10%] bg-white text-[14px] pb-[15px]'>
        <h2 className='text-2xl font-[700] my-[30px]'>Dane kontaktowe sklepu hurtopony.pl</h2>
        <div className='flex flex-col lg:flex-row md: justify-between mb-[30px] gap-10'>
          <div className='flex flex-col'>
            <h3 className='text-xl font-[700] pb-[14px]'>Telefon kontaktowy:</h3>
            <Link href='tel:+48327061018'>
              <p className='font-[700] text-[16px]'>32 706 10 18</p>
            </Link>
            <h3 className='text-xl font-[700] py-[14px]'>E-mail:</h3>
            <Link href='mailto:sklep@hurtopony.pl'>
              <p className='text-[#0275d8]'>sklep@hurtopony.pl</p>
            </Link>
            <h3 className='text-xl font-[700] py-[14px]'>Zwroty i Reklamacje:</h3>
            <Link href='mailto:reklamacje@hurtopony.pl'>
              <p className='text-[#0275d8]'>reklamacje@hurtopony.pl</p>
            </Link>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-2xl font-[700] pb-[14px]'>Adres Magazynu i Sprzedaży:</h3>

            <p className=' text-[16px] whitespace-pre-line'>
              {' Hurtopony Magazyn i Sprzedaż\n ul. Nowopogońska 1\n 41-205 Sosnowiec'}
            </p>

            <h3 className='text-xl font-[700] py-[14px]'>Adres Biura::</h3>

            <p className='whitespace-pre-line'>
              {
                'Hurtopony Sp. z o. o. \n ul. Baczyńskiego 25A\n 41-203 Sosnowiec\n Nip: 629-249-67-25\n Regon 386030051\n KRS 0000840304 \nKrajowy Rejestr Sądowy\n SĄD REJONOWY KATOWICE-WSCHÓD W KATOWICACH,\n VIII WYDZIAŁ GOSPODARCZY KRAJOWEGO REJESTRU SĄDOWEGO \nKapitał Zakładowy 140.000 zł'
              }
            </p>
          </div>
        </div>
        {isLoaded && (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={markerPosition} icon='/assets/images/location.png' />
          </GoogleMap>
        )}
      </div>
    </>
  )
}

export default Kontakt
