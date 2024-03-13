import React from 'react'
import CardProperty from '@/components/CardProperty'


export default function OtherProperties() {
  return (
    <section className='bg-[#FFFFFF] rounded-[2rem]'>
      <h2 className='text-[2rem] font-[600] pt-12 px-14 pb-8'>Otras propiedades que pueden ser para ti</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-10 pb-10'>
        {/* <CardProperty />
        <CardProperty />
        <CardProperty /> */}
      </div>
    </section>
  )
}
