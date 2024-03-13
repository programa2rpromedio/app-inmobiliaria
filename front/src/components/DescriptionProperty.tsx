import React, { useState } from 'react'
import MetrosCuadradosSVG from './svgs/MetrosCuadradosSVG'
import BanioSVG from './svgs/BathroomSVG'
import MascotaSVG from './svgs/MascotaSVG'
import HabitacionSVG from './svgs/HabitacionSVG'
import PatioSVG from './svgs/PatioSVG'
import TransporteSVG from './svgs/TransporteSVG'

interface Props {
  coveredArea: number | undefined
  bathrooms: number | undefined
  bedrooms: number | undefined
  pets: boolean | undefined
  garden: boolean | undefined
  description: string | undefined
  rooms: number | undefined
  disposition: string | undefined
  age: string | undefined
  condition: string | undefined
  orientation: string | undefined
  state: string | undefined
}


interface ViewDescription {
  description: string | undefined
}

function ViewDescription({ description }: ViewDescription) {
  return (
    <>
      <p className='text-pretty leading-[2rem]'>
        {description}
      </p>
    </>
  )
}


interface ViewAditional {
  bathrooms: number | undefined
  bedrooms: number | undefined
  coveredArea: number | undefined
  pets: boolean | undefined
  garden: boolean | undefined
}


function ViewAditional({ bathrooms, bedrooms, coveredArea, pets, garden }: ViewAditional) {
  return (
    <ul>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <MetrosCuadradosSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        El espacio del inmueble cuenta con {coveredArea}mt<sup>2</sup> cubiertos.
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <BanioSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        Cuenta con {bathrooms} {bathrooms && bathrooms > 1 ? 'baños' : 'baño'}.
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <MascotaSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        {pets ? 'Se permiten las mascotas siempre y cuando sean disciplinadas, indistinto de la raza'
          : 'No se permiten mascotas.'
        }
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <HabitacionSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        Cuenta con {bedrooms} {bedrooms && bedrooms > 1 ? 'dormitorios' : 'dormitorio'}.
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <PatioSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        {garden ? 'Si' : 'No'}
      </li>

    </ul>
  )
}

export default function DescriptionPropertie({ coveredArea, bathrooms, age, bedrooms, pets, condition, description, disposition, garden, orientation, rooms, state }: Props) {

  type Info = 'description' | 'aditional'
  const [viewInfo, setViewInfo] = useState<Info>('description')



  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setViewInfo((prevState: Info) => {
      return prevState == 'description' ? 'aditional' : 'description'
    })
  }

  return (
    <section className='my-[70px] flex flex-col gap-10 sm:px-20'>
      <div className='flex justify-center gap-10 px-20  sm:px-0'>
        <a className={`text-[24px]  pb-1 cursor-pointer ${viewInfo == 'description' ? 'border-b-[3px] border-primary ' : null}`} onClick={handleClick}>Descripción</a>
        <a className={`text-[24px]  pb-1 cursor-pointer ${viewInfo == 'aditional' ? 'border-b-[3px] border-primary ' : null}`} onClick={handleClick}>Información Adicional</a>
      </div>
      <div className='mb-[56px]'>
        {
          viewInfo == 'description' ? <ViewDescription description={description} /> : <ViewAditional coveredArea={coveredArea} bathrooms={bathrooms} bedrooms={bedrooms} pets={pets} garden={garden} />
        }
      </div>

      <div className='flex flex-col gap-y-4 px-3 sm:px-0 sm:flex-row sm:justify-evenly  w-full'>
        <div>
          <ul>
            <li>Cantidad de ambientes: {rooms}</li>
            <li>Cantidad de dormitorios: {bedrooms}</li>
            <li>Cantidad de baños: {bathrooms}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Antiguedad: {age}</li>
            <li>Disposición: {disposition}</li>
            <li>Estado: {state}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Orientacion: {orientation}</li>
            <li>Condición: {condition}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
