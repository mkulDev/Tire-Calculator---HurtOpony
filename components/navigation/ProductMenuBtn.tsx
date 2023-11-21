import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

type ProductMenuBtnProps = {
  title: string
  data: {
    name: string
    path: string
  }[]
}
const ProductMenuBtn = ({ title, data }: ProductMenuBtnProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const clickOutsideModal = (event: MouseEvent) => {
      if (modalRef.current) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', clickOutsideModal)

    return () => {
      document.removeEventListener('click', clickOutsideModal)
    }
  }, [isOpen])

  return (
    <div className='relative'>
      <button
        onClick={handleToggle}
        className=' flex items-center text-white font-bold text-base cursor-pointer hover:opacity-60 duration-500'>
        {title}
        <FontAwesomeIcon icon={faCaretDown} className=' text-[15px] self-center ml-2 ' />
      </button>
      <div
        ref={modalRef}
        className={`absolute top-[30px] left-0 px-5 py-3 bg-white ${
          isOpen ? 'block' : 'hidden'
        } rounded-sm shadow-md z-10`}>
        {data.map((element: { name: string; path: string }, index) => {
          if (element?.name === '|') {
            return <hr className='my-2' key={index} />
          }
          return (
            <Link href={`/produkty/${element.path}`} className='hover:opacity-50 cursor-pointer ' key={index}>
              <p className='text-[12px] whitespace-nowrap'>Opony {element.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ProductMenuBtn
