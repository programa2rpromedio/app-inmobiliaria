import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.svg'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='py-2 px-4 sm:px-20 bg-[#fff]'>
      <div className='flex flex-col sm:flex-row justify-between  sm:items-center mb-6'>
        <div className='flex justify-between sm:justify-normal items-center gap-2'>
          <Image src={logo} alt='Logo Alquileres Ya' width={70} />
          <h1>Alquileres Ya!</h1>
        </div>
        <div className='flex justify-between sm:justify-normal items-center gap-4 md:gap-32'>
          <Button variant='outline' size='lg' className='hidden sm:block' >Publicar propiedad </Button>
          <Button variant='outline' size='sm' className=' sm:hidden' >Publicar propiedad </Button>
          <Image src={logo} alt='Usuario' width={70} />
        </div>
      </div>

      <div className='flex gap-5 text-[#3354FF] mb-5'>
        <Link href='' >Home</Link>
        <strong> - </strong>
        <Link href='' >Alquiler</Link>
      </div>
      <hr className='w-[50%] mb-[20px]  border-[#CAC4D0]' />

      <div>
        <Link href='' className='mr-[10px] border border-b-0 p-2 rounded-[4px]'>Alquiler</Link>
        <Link href='' className='ml-[10px] border border-b-0 p-2 rounded-[4px]'>Temporal</Link>
        <div className='mt-3 w-full flex'>
          <div className='w-[80%]'>
            <input type="text" placeholder='¿Dónde querés mudarte?' className='bg-transparent outline-none border-none' />
            <input type="text" placeholder='Tipo de propiedad' className='hidden sm:inline-block sm:w-[150px] md:w-max bg-transparent outline-none border-none' />
            <input type="text" placeholder='Precio' className='hidden sm:inline-block sm:w-[100px] md:w-max bg-transparent outline-none border-none' />
          </div>
          <Button variant='default' size='lg' className='' >🔍</Button>
        </div>
      </div>
    </header>
  )
}
