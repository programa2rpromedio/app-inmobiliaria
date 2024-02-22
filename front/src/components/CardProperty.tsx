import React from 'react'
import Image from 'next/image'
import Metrospng from '../../public/metros.png'
import CasaPic1 from '@/images/casa1.png'
import { Button } from './ui/button'
import Link from 'next/link'


export default function CardProperty(/*{propiedad}*/) {
  // { title, category, type, availabilityDate, desciption, propertyPictures, value, currency, province, city, totalArea, coveredArea, rooms, bathrooms, bedrooms, pets, estado as status } = item
  let id = 1;
  return (
    <div className='flex flex-col items-center border'>
      <div className='w-full p-4'>
        <Image src={CasaPic1} className=' rounded-[12px] object-contain' alt="casa" />
      </div>
      <div className='w-full px-4 py-2'>
        <div>
          <h3>$350.000/mes</h3>
          <strong>Departamento en alquiler</strong>
          <small className='block'>Almagro, Capital Federal - 2 ambientes</small>
        </div>
        <div className='flex justify-between '>
          <div className="bg-secondary flex justify-start items-center gap-4 rounded-lg px-[2px]">
            <Image
              src={Metrospng}
              alt="Picture of the author"
              className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
              width={16}
              height={16}
            />
            <span className="text-whiteA-12">75 mt</span>
          </div>
          <div className="bg-secondary flex justify-start items-center gap-4 rounded-lg px-[2px]">
            <Image
              src={Metrospng}
              alt="Picture of the author"
              className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
              width={16}
              height={16}
            />
            <span className="text-whiteA-12">75 mt</span>
          </div>
          <div className="bg-secondary flex justify-start items-center gap-4 rounded-lg px-[2px]">
            <Image
              src={Metrospng}
              alt="Picture of the author"
              className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
              width={16}
              height={16}
            />
            <span className="text-whiteA-12">75 mt</span>
          </div>
          <div className="bg-secondary flex justify-start items-center gap-4 rounded-lg px-[2px]">
            <Image
              src={Metrospng}
              alt="Picture of the author"
              className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
              width={16}
              height={16}
            />
            <span className="text-whiteA-12">75 mt</span>
          </div>
        </div>
      </div>
      <div className='px-4 py-2 w-full'>
        {/* <Button variant='default' size='lg' className='w-full'> Ver más </Button> */}
        <Link href={`propiedades/detalle/1`}> Ver más </Link>
      </div>
    </div>
  )
}
