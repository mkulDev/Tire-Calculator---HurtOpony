import React from 'react'
import { TireWidthProps } from './TireWidth'

const TireProfile = ({ tireProperties, standardMode }: TireWidthProps) => {
  const borderColor = standardMode ? 'border-[#c6c6c6]' : 'border-[#d93731]'
  const side = standardMode ? 'border-l-[1px]' : 'left-[50%] border-r-[1px]'
  const textAlignment = standardMode ? 'left-[0%] translate-x-[-50%]' : 'right-[0%] translate-x-[50%]'
  return (
    <div className={`relative m-6 inline-block`}>
      <img src='/assets/images/calculator/opona.png' className={`h-[200px] aspect-square`} />
      <div className={`h-[15%] w-[50%] absolute bottom-[0%]  ${side} border-t-[1px] border-b-[1px] ${borderColor} `}>
        <p className={`absolute top-[50%] translate-y-[-50%] ${textAlignment} bg-neutral-100 text-[12px] font-[700]`}>{tireProperties.sidewall}</p>
      </div>
      <div className={`w-[72%] h-[55%] border-l-[1px] border-r-[1px] border-t-[1px] ${borderColor} absolute bottom-[50%] left-[14%]`}>
        <p className={`absolute top-[0%] translate-y-[-50%] translate-x-[-50%] left-[50%] bg-neutral-100 px-1 text-[12px] font-[700]`}>{tireProperties.rim}</p>
      </div>
    </div>
  )
}

export default TireProfile
