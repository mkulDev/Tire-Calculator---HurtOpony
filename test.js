const slider = [
  '/assets/images/brands/cultor.jpg',
  '/assets/images/brands/goodride.jpg',
  '/assets/images/brands/hankook.jpg',
  '/assets/images/brands/infinity.jpg',
  '/assets/images/brands/kabat-logo.jpg',
  '/assets/images/brands/matador.jpg.jpg',
  '/assets/images/brands/metzeler.jpg',
  '/assets/images/brands/nankang.jpg',
  '/assets/images/brands/nexen.jpg',
  '/assets/images/brands/pirelli.jpg',
  '/assets/images/wanli.jpg.jpg',
]

const getRandomsBrand = (arr, number) => {
  let newArr = []
  while (newArr.length < number) {
    const index = Math.floor(Math.random() * arr.length)
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index])
    }
  }
  return newArr
}

console.log(getRandomsBrand(slider, 4))
import React, { useState, useEffect } from 'react'
import Select from 'react-select'

const InputForm = ({ tire, setData, isReplacament }) => {
  const [widthValue, setWidthValue] = useState(null)
  const [profileValue, setProfileValue] = useState(null)
  const [rimsValue, setRimsValue] = useState(null)

  const options1 = [195, 205, 215]
  const options2 = [30, 45, 50]
  const options3 = [16, 17, 18]

  const getWidthName = isReplacament ? 'replacementWidth' : 'tireWidth'
  const getProfilehName = isReplacament ? 'replacementProfile' : 'tireProfile'
  const getRimsName = isReplacament ? 'replacementRims' : 'tireRims'

  const widthOptions = [{ label: 'Wybierz', value: 'Wybierz' }, ...options1.map((element) => ({ label: String(element), value: element }))]

  const profileOptions = [{ label: 'Wybierz', value: 'Wybierz' }, ...options2.map((element) => ({ label: String(element), value: element }))]

  const rimsOptions = [{ label: 'Wybierz', value: 'Wybierz' }, ...options3.map((element) => ({ label: String(element), value: element }))]

  useEffect(() => {
    // Reset profile and rims when width changes
    setProfileValue(null)
    setRimsValue(null)
  }, [widthValue])

  useEffect(() => {
    // Reset rims when profile changes
    setRimsValue(null)
  }, [profileValue])

  return (
    <div className='flex-col md:flex-start items-start gap-3 text-[14px]'>
      <div className='flex flex-col justify-start w-[120px]'>
        <label className='font-[700] pt-2'>Szerokość:</label>
        <Select
          options={widthOptions}
          value={widthValue}
          placeholder='Wybierz'
          onChange={(selectedOption) => {
            setWidthValue(selectedOption)
            setData({ target: { name: getWidthName, value: selectedOption?.value } })
          }}
        />
      </div>
      <div className='flex flex-col justify-start w-[120px]'>
        <label className='font-[700] pt-2'>Profil:</label>
        <Select
          options={profileOptions}
          value={profileValue}
          placeholder='Wybierz'
          defaultValue={widthOptions[0]}
          onChange={(selectedOption) => {
            setProfileValue(selectedOption)
            setData({ target: { name: getProfilehName, value: selectedOption?.value } })
          }}
        />
      </div>
      <div className='flex flex-col justify-start w-[120px]'>
        <label className='font-[700] pt-2'>Średnica:</label>
        <Select
          options={rimsOptions}
          value={rimsValue}
          placeholder='Wybierz'
          onChange={(selectedOption) => {
            setRimsValue(selectedOption)
            setData({ target: { name: getRimsName, value: selectedOption?.value } })
          }}
        />
      </div>
    </div>
  )
}

export default InputForm
