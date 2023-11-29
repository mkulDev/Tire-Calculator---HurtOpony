'use client'
import Select from 'react-select'
import { car } from './tireData'
import { carRims } from './tireData'
import { useState, useEffect } from 'react'
import { TireProperties } from './TireCalculator'
const customOptionStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: '40px',
    border: '1px solid #ccc',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #d93731',
    },
  }),
  option: (provided: any, state: { isFocused: boolean; isSelected: boolean }) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#d93731' : 'white',
    color: state.isFocused ? 'white' : 'black',
    '&:active': {
      backgroundColor: state.isSelected ? '#d93731' : 'white',
    },
  }),
}
type InputFormProps = {
  tire: AllTireProps
  setData: any
  isReplacament: boolean
  setTireProperties: React.Dispatch<React.SetStateAction<TireProperties>>
}

type widthState = {
  label: number | string
  value: number | string
} | null

type carObj = {
  width: number
  profiles: number[]
}

type AllTireProps = {
  tireWidth?: number | null
  replacementWidth?: number | null
  tireProfile?: number | null
  replacementProfile?: number | null
  tireRim?: number | null
  replacementRims?: number | null
}

const resetTireProperties = {
  diameter: 'n/d',
  width: 'n/d',
  rim: 'n/d',
  sidewall: 'n/d',
  circum: 'n/d',
  revskm: 'n/d',
}

const InputForm = ({ tire, setData, isReplacament, setTireProperties }: InputFormProps) => {
  const [widthValue, setWidthValue] = useState<widthState>(null)
  const [profileValue, setProfileValue] = useState<widthState>(null)
  const [rimsValue, setRimsValue] = useState<widthState>(null)

  const getWidthName = isReplacament ? 'replacementWidth' : 'tireWidth'
  const getProfilehName = isReplacament ? 'replacementProfile' : 'tireProfile'
  const getRimsName = isReplacament ? 'replacementRim' : 'tireRim'

  const getPrifiles = tire[getWidthName] ? car.find((element) => element.width === Number(tire[getWidthName]))?.profiles : null

  const getRims =
    tire?.[getWidthName] && tire?.[getProfilehName]
      ? carRims.find((element) => element.width === Number(tire[getWidthName]) && element.profile === Number(tire[getProfilehName]))?.rims
      : null

  const widthOptions = [{ label: 'Wybierz', value: 'Wybierz' }, ...car.map((element: carObj, index) => ({ label: element.width, value: element.width }))]

  const profileOptions = getPrifiles ? [{ label: 'Wybierz', value: 'Wybierz' }, ...getPrifiles.map((element, index) => ({ label: element, value: element }))] : []

  const rimsOptions = getRims ? [{ label: 'Wybierz', value: 'Wybierz' }, ...getRims.map((element, index) => ({ label: element, value: element }))] : []
  useEffect(() => {
    // We reset profile and rims when width changes
    setProfileValue(null)
    setRimsValue(null)
  }, [widthValue])

  useEffect(() => {
    // We eeset rims when profile changes
    setRimsValue(null)
  }, [profileValue])

  return (
    <div className='flex flex-col md:flex-row md:flex-start items-start gap-3 text-[14px]'>
      <div className='flex flex-col justify-start w-[120px]'>
        <label className='font-[700]'>Szerokość:</label>
        <Select
          options={widthOptions}
          value={widthValue}
          noOptionsMessage={() => 'Brak Opcji'}
          placeholder='Wybierz'
          onChange={(selectedOption) => {
            setTireProperties(resetTireProperties)
            setWidthValue(selectedOption)
            setData({ target: { name: getWidthName, value: selectedOption?.value } })
          }}
          styles={customOptionStyles}
        />
      </div>
      <div className='flex flex-col justify-start w-[120px]'>
        <label className='font-[700]'>Profil:</label>

        <Select
          options={profileOptions}
          value={profileValue}
          noOptionsMessage={() => 'Brak Opcji'}
          placeholder='Wybierz'
          onChange={(selectedOption) => {
            setTireProperties(resetTireProperties)
            setProfileValue(selectedOption)
            setData({ target: { name: getProfilehName, value: selectedOption?.value } })
          }}
          styles={customOptionStyles}
        />
      </div>
      <div className='flex flex-col justify-start w-[120px]'>
        <label className='font-[700]'>Średnica:</label>
        <Select
          options={rimsOptions}
          value={rimsValue}
          noOptionsMessage={() => 'Brak Opcji'}
          placeholder='Wybierz'
          onChange={(selectedOption) => {
            setTireProperties(resetTireProperties)
            setRimsValue(selectedOption)
            setData({ target: { name: getRimsName, value: selectedOption?.value } })
          }}
          styles={customOptionStyles}
        />
      </div>
    </div>
  )
}

export default InputForm
