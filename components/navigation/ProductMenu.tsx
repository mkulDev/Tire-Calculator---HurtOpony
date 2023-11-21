'use client'
import ProductMenuBtn from './ProductMenuBtn'

const Btns = [
  {
    title: 'Opony wg kategorii',
    data: [
      { name: 'osobowe', path: 'osobowe' },
      { name: 'terenowe', path: 'terenowe' },
      { name: '|', path: '' },
      { name: 'dostawcze', path: 'dostawcze' },
      { name: 'ciężarowe', path: 'ciezarowe' },
      { name: '|', path: '' },
      { name: 'rolnicze', path: 'rolnicze' },
      { name: 'do kosiarek', path: 'do-kosiarek' },
      { name: 'specjalne', path: 'specjalne' },
      { name: 'przemysłowe', path: 'przemyslowe' },
      { name: 'do wózków widłowych', path: 'do-wozkow-widlowych' },
      { name: '|', path: '' },
      { name: 'motocyklowe', path: 'motocyklowe' },
      { name: 'do skuterów', path: 'do-skuterow' },
      { name: 'do quadów', path: 'do-quadow' },
      { name: 'do gokartów', path: 'do-gokartow' },
    ],
  },
  {
    title: 'Opony wg pojazdu',
    data: [
      { name: 'do motocykli', path: 'do-motocykli' },
      { name: 'do samochodów', path: 'do-samochodow' },
      { name: 'do ciągników', path: 'do-ciagnikow' },
    ],
  },
  {
    title: 'Akcesoria',
    data: [
      { name: 'Dętki', path: 'detki' },
      { name: 'Ochraniacze', path: 'ochraniacze' },
    ],
  },
]

const ProductMenu = () => {
  return (
    <div className='w-full py-[15px] sm:py-0 sm:h-[65px] bg-[#494b4b] flex items-center'>
      <div className='px-[10%] w-full flex flex-col sm:flex-row sm:flex-start gap-5 items-center justify-center sm:justify-start'>
        {Btns.map((button) => (
          <ProductMenuBtn title={button.title} data={button.data} key={button.title} />
        ))}
      </div>
    </div>
  )
}

export default ProductMenu
