import { TireProperties } from './TireCalculator'

export type TireWidthProps = {
  tireProperties: TireProperties
  standardMode: boolean
}

const TireWidth = ({ tireProperties, standardMode }: TireWidthProps) => {
  const borderColor = standardMode ? 'border-[#c6c6c6]' : 'border-[#d93731]'
  const side = standardMode ? 'left-[-20%] border-l-[1px]' : 'right-[-20%] border-r-[1px]'
  const textAlignment = standardMode ? 'left-[0%] translate-x-[-50%]' : 'right-[0%] translate-x-[50%]'

  return (
    <div className={`relative  inline-block my-5 ${standardMode ? 'ml-8' : 'mr-8'} md:m-6`}>
      <img src='/assets/images/calculator/oponaProfil.png' className='h-[200px]' />
      <div className={`h-[100%] w-[15%] absolute top-0 ${side} border-t-[1px] border-b-[1px] ${borderColor} `}>
        <p className={`absolute top-[50%] translate-y-[-50%] ${textAlignment} bg-neutral-100 py-1 text-[12px] font-[700]`}>{tireProperties.diameter}</p>
      </div>
      <div className={`w-[100%] h-[5%] border-l-[1px] border-r-[1px] border-b-[1px] ${borderColor} absolute top-[102%] left-0`}>
        <p className={`absolute top-[100%] translate-y-[-50%] translate-x-[-50%] left-[50%] bg-neutral-100 px-1 text-[12px] font-[700]`}>{tireProperties.width}</p>
      </div>
    </div>
  )
}

export default TireWidth
