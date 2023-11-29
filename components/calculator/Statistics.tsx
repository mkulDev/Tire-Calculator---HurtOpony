import React from 'react'
import { TireProperties } from './TireCalculator'
type StatisticsProps = { tireProperties: TireProperties; replacement: boolean; color: string }

const Statistics = ({ tireProperties, replacement, color }: StatisticsProps) => {
  const cellTailwindClass = `py-1 flex items-center gap-1 min-w-525:gap-3 min-w-525:p-1`
  const pTailwindClass = `${
    replacement ? 'rounded-r-lg border-l-[2px] justify-start order-first' : 'rounded-l-lg border-r-[2px] justify-end'
  } ${color} shadow-md text-white px-2 w-[40px] min-w-525:w-[60px] md:w-[80px] py-1 flex md:px-4 border-[#ccc]`

  return (
    <div className={`inline-flex flex-col ${replacement ? 'items-start' : 'items-end'} text-[10px] min-w-525:text-[12px] md:text-base`}>
      <div className={cellTailwindClass}>
        <h6 className={`font-[700] `}>Średnica opony</h6>
        <p className={pTailwindClass}>{tireProperties.diameter}</p>
      </div>
      <div className={cellTailwindClass}>
        <h6 className='font-[700]'>Szerokość opony</h6>
        <p className={pTailwindClass}>{tireProperties.width}</p>
      </div>
      <div className={cellTailwindClass}>
        <h6 className='font-[700]'>Średnica flegi</h6>
        <p className={pTailwindClass}>{tireProperties.rim}</p>
      </div>
      <div className={cellTailwindClass}>
        <h6 className='font-[700]'>Wysokość Profilu</h6>
        <p className={pTailwindClass}>{tireProperties.sidewall}</p>
      </div>
      <div className={cellTailwindClass}>
        <h6 className='font-[700]'>Obwód opony</h6>
        <p className={pTailwindClass}>{tireProperties.circum}</p>
      </div>
      <div className={cellTailwindClass}>
        <h6 className='font-[700]'>Obroty/km</h6>
        <p className={`${pTailwindClass} `}>{tireProperties.revskm}</p>
      </div>
    </div>
  )
}

export default Statistics
