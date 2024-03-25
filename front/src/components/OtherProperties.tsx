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
    <section className='bg-[#FFFFFF] rounded-[2rem]'>
      <h2 className='text-[2rem] font-[600] pt-12 px-14 pb-8'>Otras propiedades que pueden ser para ti</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-10 pb-10'>
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
