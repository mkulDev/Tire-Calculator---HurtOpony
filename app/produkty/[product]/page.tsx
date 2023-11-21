'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const ProductPage = () => {
  const { product } = useParams()
  console.log(product)
  return (
    <div className='px-[10%] bg-white w-full h-[600px] flex items-center justify-center'>
      <h2>product page: Opny/{product}</h2>
    </div>
  )
}

export default ProductPage
