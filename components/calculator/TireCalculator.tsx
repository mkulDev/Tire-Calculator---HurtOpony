'use client'

import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import TireWidth from './TireWidth'
import TireProfile from './TireProfile'
import { getTireProperty, isReplacementAllowed } from './formulas'
import { RiErrorWarningLine } from 'react-icons/ri'
import { GrStatusGood } from 'react-icons/gr'
import Statistics from './Statistics'

export type TireObject = {
  tireWidth: number | null
  tireProfile: number | null
  tireRim: number | null
}

export type ReplacmentObject = {
  replacementWidth: number | null
  replacementProfile: number | null
  replacementRim: number | null
}

export type TireProperties = {
  diameter: number | string
  width: number | string
  rim: number | string
  sidewall: number | string
  circum: number | string
  revskm: number | string
}

type AllowReplacement = {
  allow: string
  percent: number | null
}

const resetTire = {
  tireWidth: null,
  tireProfile: null,
  tireRim: null,
}

const resetReplacement = {
  replacementWidth: null,
  replacementProfile: null,
  replacementRim: null,
}

const resetTireProperties = {
  diameter: 'n/d',
  width: 'n/d',
  rim: 'n/d',
  sidewall: 'n/d',
  circum: 'n/d',
  revskm: 'n/d',
}

const resetAllowReplacement = {
  allow: '',
  percent: null,
}

const TireCalculator = () => {
  const [compareMode, setCompareMode] = useState(true)
  const [tire, setTire] = useState<TireObject>(resetTire)
  const [tireProperties, setTireProperties] = useState<TireProperties>(resetTireProperties)
  const [replacement, SetReplacement] = useState<ReplacmentObject>(resetReplacement)
  const [replacementProperties, setReplacementProperties] = useState<TireProperties>(resetTireProperties)
  const gradientRed = 'bg-gradient-to-r from-red-700 to-[#d93731]'
  const gradientGray = 'bg-gradient-to-r from-neutral-600 to-neutral-800'
  const [allowReplacement, setAllowReplacement] = useState<AllowReplacement>(resetAllowReplacement)

  const handleModeChange = (num: number) => {
    setTire(resetTire)
    setTireProperties(resetTireProperties)
    SetReplacement(resetReplacement)
    setReplacementProperties(resetTireProperties)
    compareMode === false && num === 0 ? setCompareMode(true) : setCompareMode(false)
  }

  const handleTireChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAllowReplacement(resetAllowReplacement)
    const { name, value } = e.target
    if (value === 'Wybierz') {
      if (name === 'tireRim') setTire({ ...tire, tireRim: null })
      if (name === 'tireProfile') setTire({ ...tire, tireProfile: null, tireRim: null })
      if (name === 'tireWidth') setTire({ tireWidth: null, tireProfile: null, tireRim: null })
    } else if (value) {
      const updatedTire = { ...tire, [name]: value }
      if (value === 'tireProfile') updatedTire.tireRim = null
      if (value === 'tireWidth') {
        updatedTire.tireProfile = null
        updatedTire.tireRim = null
      }
      setTire(updatedTire)
    }
  }

  const handleReplacementChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAllowReplacement(resetAllowReplacement)
    const { name, value } = e.target
    if (value === 'Wybierz') {
      if (name === 'replacementRim') SetReplacement({ ...replacement, replacementRim: null })
      if (name === 'replacementProfile') SetReplacement({ ...replacement, replacementProfile: null, replacementRim: null })
      if (name === 'replacementWidth') SetReplacement({ replacementWidth: null, replacementProfile: null, replacementRim: null })
    } else if (value) {
      const updatedTire = { ...replacement, [name]: value }
      if (value === 'replacementProfile') updatedTire.replacementRim = null
      if (value === 'replacementWidth') {
        updatedTire.replacementProfile = null
        updatedTire.replacementRim = null
      }
      SetReplacement(updatedTire)
    }
  }

  const handleCalculation = () => {
    if (tire) {
      if (tire.tireWidth && tire.tireProfile && tire.tireRim) {
        setTireProperties(getTireProperty(tire.tireWidth, tire.tireProfile, tire.tireRim))
      }
    }
    if (replacement) {
      if (replacement.replacementWidth && replacement.replacementProfile && replacement.replacementRim) {
        setReplacementProperties(getTireProperty(replacement.replacementWidth, replacement.replacementProfile, replacement.replacementRim))
      }
    }
  }

  useEffect(() => {
    if (typeof tireProperties.diameter === 'number' && typeof replacementProperties.diameter === 'number') {
      const response = isReplacementAllowed(tireProperties?.diameter, replacementProperties?.diameter)

      if (response?.allow === 'Tak' || response?.allow === 'Nie') setAllowReplacement({ ...response, percent: Number(response.percent) })
    }
  }, [tireProperties, replacementProperties])

  const isCompareDisabled = !(tire.tireWidth && tire.tireProfile && tire.tireRim && replacement.replacementWidth && replacement.replacementProfile && replacement.replacementRim)
  const isCalcDisabled = !(tire.tireWidth && tire.tireProfile && tire.tireRim)

  return (
    <section id='kalkulator'>
      <div className='w-full px-[10%] mt-[30px] '>
        <div className='w-full md:w-auto md:inline-block md:text-[14px] bg-neutral-200 rounded-t-lg border-l-[1px] border-t-[1px] border-r-[1px] text-[12px] '>
          <button
            className={`w-1/2 p-2 md:py-3 md:px-8 md:w-auto rounded-t-lg  ${compareMode ? 'bg-neutral-100' : 'bg-neutral-300'}  hover:opacity-50 duration-500`}
            onClick={() => {
              handleModeChange(0)
            }}>
            <span className='font-[700] '>Sprawdź zamiennik</span>
          </button>
          <button
            className={`w-1/2 p-2 md:py-3 md:px-8 md:w-auto rounded-t-lg  ${compareMode ? 'bg-neutral-300' : 'bg-neutral-100'}  hover:opacity-50 duration-500`}
            onClick={() => {
              handleModeChange(1)
            }}>
            <span className='font-[700] '>Kalkulator opon</span>
          </button>
        </div>
        {compareMode ? (
          <div className=' animate-fade bg-neutral-100 border-[1px] border-t-0 px-[5%] md:px-[10%] py-[40px] md:py-[60px] lg:py-[80px]'>
            <div className='flex flex-col min-w-1350:flex-row justify-center  min-w-1350:items-end gap-5 xl:gap-10 items-center '>
              <div className='flex flex-col items-center'>
                <h3 className='font-[700] text-xl min-w-525:text-2xl'>
                  Twój <span className=''>Rozmiar Opon</span>
                </h3>
                <hr className='h-[2px] w-full my-2 md:my-4 block' />
                <InputForm tire={tire} setData={handleTireChange} isReplacament={false} setTireProperties={setTireProperties} />
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='font-[700] text-xl min-w-525:text-2xl'>
                  Rozmiar <span className='text-[#d93731] '>Zamienika</span>
                </h3>
                <hr className='h-[2px] w-full my-2 md:my-4 block' />
                <InputForm tire={replacement} setData={handleReplacementChange} isReplacament={true} setTireProperties={setReplacementProperties} />
              </div>
              <button
                onClick={handleCalculation}
                disabled={isCompareDisabled}
                className='min-w-[150px] h-[40px] border-[2px] border-[#b91c1c] bg-gradient-to-r from-[#d93731] to-red-700 text-white hover:opacity-70 duration-500'>
                Sprawdź
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <hr className='h-[2px] w-full my-6 block' />
              <div className='w-full font-[700] text-xl md:text-2xl text-center'>
                <h2 className=''>
                  Czy można zastosować <span className=''>zamiennik?</span>
                </h2>
                <p className={`${allowReplacement.allow === 'Tak' ? 'text-black' : 'text-[#d93731] '} font-[700] text-3xl mt-4 mb-2`}>{allowReplacement.allow}</p>
                {allowReplacement.percent && (
                  <div className='flex items-center justify-center gap-1'>
                    <span>
                      {allowReplacement.allow === 'Nie' ? (
                        <RiErrorWarningLine className='text-[#d93731] mr-[2px] hidden min-w-525:block' />
                      ) : (
                        <GrStatusGood className='text-black mr-[2px] hidden min-w-525:block' />
                      )}
                    </span>
                    <p className={`${allowReplacement.allow === 'Tak' ? 'text-black' : 'text-[#d93731] '} font-[700] text-[12px] md:text-sm leading-3`}>
                      {allowReplacement.percent ? allowReplacement.percent + '% ' : ''}
                      {allowReplacement.allow === 'Tak'
                        ? 'Średnica zamiennika mieści się w normie.'
                        : allowReplacement.percent && allowReplacement?.percent < 0
                        ? 'Średnica zamiennika okazała się za mała.'
                        : 'Średnica zamiennika okazała się za duża.'}
                    </p>
                  </div>
                )}
              </div>
              <hr className='h-[2px] w-full my-6 block' />
              <h4 className='font-[700] text-xl text-center my-5'>
                Przedstawienie <span className='text-[#d93731] '>Graficzne</span>
              </h4>
              <div className=''>
                <Statistics tireProperties={tireProperties} replacement={false} color={gradientGray} />
                <Statistics tireProperties={replacementProperties} replacement={true} color={gradientRed} />
              </div>
              <div className='flex flex-col md:hidden'>
                <div className='inline-flex items-center justify-center gap-3 my-[20px]'>
                  <TireWidth standardMode={true} tireProperties={tireProperties} />
                  <TireWidth standardMode={false} tireProperties={replacementProperties} />
                </div>
                <div className='inline-flex flex-col md:flex-row items-center my-[20px]'>
                  <TireProfile standardMode={true} tireProperties={tireProperties} />
                  <TireProfile standardMode={false} tireProperties={replacementProperties} />
                </div>
              </div>
              <div className='hidden flex-col md:flex xl:flex-row'>
                <div className='inline-flex items-center justify-center gap-3 my-[20px] xl:flex-row-reverse'>
                  <TireWidth standardMode={true} tireProperties={tireProperties} />
                  <TireProfile standardMode={true} tireProperties={tireProperties} />
                </div>
                <div className='inline-flex flex-col md:flex-row items-center my-[20px] '>
                  <TireWidth standardMode={false} tireProperties={replacementProperties} />
                  <TireProfile standardMode={false} tireProperties={replacementProperties} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=' animate-fade'>
            <div className='flex flex-col justify-center items-center bg-neutral-100 border-[1px] border-t-0 px-[10%] md:px-[8%] py-[40px]'>
              <h3 className='font-[700] text-2xl'>
                Twój <span className='text-[#d93731] '>Rozmiar Opon</span>
              </h3>
              <hr className='h-[2px] w-full my-4' />
              <div className='flex flex-col md:flex-row items-center md:items-end gap-5'>
                <InputForm tire={tire} setData={handleTireChange} isReplacament={false} setTireProperties={setTireProperties} />
                <button
                  onClick={handleCalculation}
                  disabled={isCalcDisabled}
                  className='w-[150px] h-[40px] border-[2px] border-[#b91c1c] bg-gradient-to-r from-[#d93731] to-red-700 text-white hover:opacity-70 duration-500'>
                  Oblicz
                </button>
              </div>
              <hr className='h-[2px] w-full my-4' />
              <h4 className='font-[700] text-xl text-center mb-5'>
                Przedstawienie <span className='text-[#d93731] '>Graficzne</span>
              </h4>
              <div className='flex flex-row flex-wrap justify-center md: gap-5'>
                <TireWidth standardMode={true} tireProperties={tireProperties} />
                <TireProfile standardMode={true} tireProperties={tireProperties} />
                <Statistics tireProperties={tireProperties} replacement={false} color={gradientRed} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TireCalculator
