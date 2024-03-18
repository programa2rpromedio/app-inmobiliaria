'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/images/logoalquileresya.svg'
import { Button } from './ui/button'
import Link from 'next/link'
import { User } from '@/lib/types'
import { getUser } from '@/lib/getUser'
import userDefault from "@/images/userDefault.png";
import Search from '@/images/search.svg'


export default function Header() {

  const [user, setUser] = useState<User | undefined>()
  useEffect(() => {
    setUser(getUser())
  }, [])

  return (
    <header className='py-2 px-4 sm:px-20 bg-[#fff]'>
      <div className='flex flex-col sm:flex-row justify-between  sm:items-center mb-6'>
        <div className='flex justify-between sm:justify-normal items-center gap-2'>
          <Image src={logo} alt='Logo Alquileres Ya' width={200} height={200} />
        </div>
        <div className='flex justify-between sm:justify-normal items-center gap-4 md:gap-32'>

          {
            user ?
              <div className="flex justify-between gap-4 w-full items-center sm:gap-8 md:gap-16 sm:justify-normal sm:px-2">
                {
                  user.role === 'owner' ?
                    <Link href='cargar-propiedad' className="order-2 sm:order-1 border border-primary text-primary hover:bg-muted h-10 px-4 py-2">Publicar propiedad</Link>
                    :
                    null
                }
                <Image src={user.profilePicture?.url ?? userDefault.src} alt="user picture" width={70}
                  height={70} className=" sm:order-2" />
              </div>
              :
              <Link href='iniciar-sesion' className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Iniciar sesión</Link>

          }
          {/* <Button variant='outline' size='lg' className='hidden sm:block' >Publicar propiedad </Button>
          <Button variant='outline' size='sm' className=' sm:hidden' >Publicar propiedad </Button>
          <Image src={logo} alt='profile picture user' width={70} /> */}
        </div>
      </div>

      <div className='flex gap-5 text-[#3354FF] mb-5'>
        <Link href='/' >Home</Link>
        <strong> - </strong>
        <Link href='' >Alquiler</Link>
      </div>
      <hr className='w-[50%] mb-[20px]  border-[#CAC4D0]' />

      <div>
        <Link href='' className='mr-[10px] border border-b-0 p-2 rounded-[4px]'>Alquiler</Link>
        <Link href='' className='ml-[10px] border border-b-0 p-2 rounded-[4px]'>Temporal</Link>
        <div className='mt-3 w-full flex items-center'>
          <div className='w-[80%]'>
            <input type="text" placeholder='¿Dónde querés mudarte?' className='bg-transparent outline-none border-none w-full' />
            {/* <input type="text" placeholder='Tipo de propiedad' className='hidden sm:inline-block sm:w-[150px] md:w-max bg-transparent outline-none border-none' />
            <input type="text" placeholder='Precio' className='hidden sm:inline-block sm:w-[100px] md:w-max bg-transparent outline-none border-none' /> */}
          </div>
          <Button variant='default' size='lg' className='' ><Image src={Search} alt='search' /></Button>
        </div>
      </div>
    </header>
  )
}
