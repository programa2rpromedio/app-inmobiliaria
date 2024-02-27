import React from 'react'
import Image from 'next/image'
import MetrosCuadradosSVG from '@/components/svgs/MetrosCuadradosSVG'
import BanioSVG from '@/components/svgs/BathroomSVG'
import MascotaSVG from '@/components/svgs/MascotaSVG'
import HabitacionSVG from '@/components/svgs/HabitacionSVG'
import CasaPic1 from '@/images/casa1.png'
import { Button } from './ui/button'
import Link from 'next/link'


export default function CardProperty(/*{propiedad}*/) {
  // { title, category, type, availabilityDate, desciption, propertyPictures, value, currency, province, city, totalArea, coveredArea, rooms, bathrooms, bedrooms, pets, estado as status } = item
  let id = 1;
  return (
    <div className='flex flex-col items-center bg-[#FFFFFF]'>
      <div className='w-full p-4'>
        <Image src={CasaPic1} className=' rounded-[12px] object-contain' alt="casa" />
      </div>
      <div className='w-full px-4 py-2'>
        <div>
          <h3>$350.000/mes</h3>
          <strong>Departamento en alquiler</strong>
          <small className='block'>Almagro, Capital Federal - 2 ambientes</small>
        </div>
        <div className='flex justify-between flex-wrap '>
          <div className=" text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <MetrosCuadradosSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">75 mt</h4>
          </div>
          <div className="text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <HabitacionSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">75 mt</h4>
          </div>
          <div className="text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <BanioSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">75 mt</h4>
          </div>
          <div className="text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <MascotaSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">75 mt</h4>
          </div>
        </div>
      </div>
      <div className='px-4 py-2 w-full'>
        <Link href={`propiedades/${id}`} className='bg-primary text-primary-foreground hover:bg-primary/90 w-full block h-11 rounded-md px-8 text-center py-[10px]'> Ver más </Link>
      </div>
    </div>
  )
}
