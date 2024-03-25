import { Property } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'


type RegisterInput = 'rooms' | 'bedrooms' | 'bathrooms'

interface Props {
  control: RegisterInput,
  label: string
  id: string
}

export default function InputNumber({ control, label, id }: Props) {


  const { register, setValue, formState } = useFormContext()

  const [number, setNumber] = useState(0)

  const incrementNumber = () => {
    setNumber(prev => prev + 1)
  }
  const decrementNumber = () => {
    setNumber(prev => prev - 1)
  }

  useEffect(() => {
    setValue(control, number)
  }, [number, setValue, control])


  return (
    <>
      <div className='flex items-center justify-between mt-2'>
        <label htmlFor={id} className="block  text-sm font-medium  text-[#484554] dark:text-white">Cantidad de {label}</label>
        <div className="relative flex items-center max-w-[10rem] gap-4">
          <button type="button" /*data-input-counter-decrement="quantity-input"*/ className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-700 rounded-[50%] p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none disabled:hover:bg-transparent" onClick={decrementNumber} disabled={number <= 0 ? true : false}>
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
            </svg>
          </button>

          <input type="number" id={id} /*data-input-counter aria-describedby="helper-text-explanation"*/ className=" bg-transparent text-sm  block w-full py-2.5 text-center border-none " placeholder="0" required   {...register(control)} value={number} />

          <button type="button" /*data-input-counter-increment="quantity-input"*/ className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-700 rounded-[50%] p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={incrementNumber}>
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </div>
      {formState.errors[control] && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors[control]?.message as string}</p>}

    </>
  )
}
