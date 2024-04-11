import React, { useEffect, useState } from 'react'
import CardProperty from '@/components/CardProperty'
import { PropertyCard } from '@/lib/types'
import { instanceAxios } from '@/lib/axios'


export default function OtherProperties() {

  const [properties, setProperties] = useState<PropertyCard[] | undefined>()



  useEffect(() => {
    instanceAxios.get('/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <section className='bg-[#FFFFFF] sm:rounded-[2rem]  media320:w-[315px] media375:w-full'>
      <h2 className='media320:text-[1.5rem] sm:text-[2rem] font-[600] pt-12 px-14 pb-8'>Otras propiedades que pueden ser para ti</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-6 sm:px-10 pb-10 w-full'>
        {
          properties?.length ? properties.slice(0, 3).map(prop => {
            return <CardProperty key={prop.propertyId} {...prop} />
          })
            :
            <h2>No hay propiedades </h2>
        }
      </div>
    </section>
  )
}
