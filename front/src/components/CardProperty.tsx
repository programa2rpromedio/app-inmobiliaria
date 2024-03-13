'use client'
import React from 'react'
import Image from 'next/image'
import MetrosCuadradosSVG from '@/components/svgs/MetrosCuadradosSVG'
import BanioSVG from '@/components/svgs/BathroomSVG'
import MascotaSVG from '@/components/svgs/MascotaSVG'
import HabitacionSVG from '@/components/svgs/HabitacionSVG'
import CasaPic1 from '@/images/casa1.png'
import Link from 'next/link'
import { PropertyCard } from '@/lib/types'


export default function CardProperty(prop: PropertyCard) {
  const { title, value, city, province, coveredArea, rooms, pets, bedrooms, propertyPictures, propertyId } = prop

  console.log(propertyPictures[0].url);


  return (
    <div className='flex flex-col items-center bg-[#FFFFFF] max-w-[350px]'>
      <div className='w-full p-4'>
        <Image src={propertyPictures[0]?.url} className=' rounded-[12px] object-contain' alt={title} width={350} height={270} />
      </div>
      <div className='w-full px-4 py-2'>
        <div>
          <h3>${value}</h3>
          <strong>{title}</strong>
          <small className='block'>{city}, {province} - {rooms} ambientes</small>
        </div>
        <div className='flex justify-between flex-wrap  '>
          <div className=" text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <MetrosCuadradosSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">{coveredArea} mt<sup>2</sup></h4>
          </div>
          <div className="text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <HabitacionSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">{rooms}</h4>
          </div>
          <div className="text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <BanioSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">{bedrooms}</h4>
          </div>
          <div className="text-[#19BC86] flex justify-start items-center gap-2 rounded-lg px-[2px]">
            <MascotaSVG className='w-[16px]' />
            <h4 className="text-[black] sm:text-[0.6rem] md:text-[0.9rem]">{pets}</h4>
          </div>
        </div>
      </div>
      <div className='px-4 py-2 w-full'>
        {/* TODO */}
        <Link href={`propiedades/${propertyId}`} className='bg-primary text-primary-foreground hover:bg-primary/90 w-full block h-11 rounded-md px-8 text-center py-[10px]'> Ver más </Link>
      </div>
    </div>
  )
}
