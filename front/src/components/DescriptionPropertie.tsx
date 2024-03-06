import React, { useState } from 'react'
import MetrosCuadradosSVG from './svgs/MetrosCuadradosSVG'
import BanioSVG from './svgs/BathroomSVG'
import MascotaSVG from './svgs/MascotaSVG'
import HabitacionSVG from './svgs/HabitacionSVG'
import PatioSVG from './svgs/PatioSVG'
import TransporteSVG from './svgs/TransporteSVG'

function ViewDescription() {
  return (
    <>
      <p className='text-pretty leading-[2rem]'>
        Patio cubierto. <br />
        Ingreso por patio techado de vidrio que separa la cocina de un ambiente.La propiedad se entrega con aire acondicionado y piso de parquet.Cocina con espacio de comedor, toda refaccionada. También tiene espacio para un lavarropas.Baño completo, con mampara.
      </p>
      <p> Hermosa y amplia terraza con lavadero.</p>
    </>
  )
}


function ViewAditional() {
  return (
    <ul>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <MetrosCuadradosSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        El espacio del inmueble cuenta con 75 m2 totales, incluyendo la sección de terraza
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <BanioSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        Cuenta con 2 baños, siendo uno completo y otro siendo medio baño
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <MascotaSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        Se permiten las mascotas siempre y cuando sean disciplinadas, indistinto de la raza
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <HabitacionSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        2 habitaciones medianas amuebladas con espacio para coworking y estancias
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <PatioSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        1 pequeña terraza con lavadero y vista a avenida principal
      </li>
      <li className='flex items-center gap-3  text-[1.1rem] p-3'>
        <TransporteSVG className='md:w-8 sm:w-12 text-[#19BC86]' />
        A solo 100 metros de la línea B de Subte
      </li>
    </ul>
  )
}

export default function DescriptionPropertie() {

  type Info = 'desciption' | 'aditional'
  const [viewInfo, setViewInfo] = useState<Info>('desciption')



  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setViewInfo((prevState: Info) => {
      return prevState == 'desciption' ? 'aditional' : 'desciption'
    })
  }

  return (
    <section className='my-[70px] flex flex-col gap-10 sm:px-20'>
      <div className='flex justify-center gap-10 px-20  sm:px-0'>
        <a className={`text-[24px]  pb-1 cursor-pointer ${viewInfo == 'desciption' ? 'border-b-[3px] border-primary ' : null}`} onClick={handleClick}>Descripción</a>
        <a className={`text-[24px]  pb-1 cursor-pointer ${viewInfo == 'aditional' ? 'border-b-[3px] border-primary ' : null}`} onClick={handleClick}>Información Adicional</a>
      </div>
      <div className='mb-[56px]'>
        {
          viewInfo == 'desciption' ? <ViewDescription /> : <ViewAditional />
        }
      </div>

      <div className='flex flex-col gap-y-4 px-3 sm:px-0 sm:flex-row sm:justify-evenly  w-full'>
        <div>
          <ul>
            <li>Cantidad de ambientes: 2</li>
            <li>Cantidad de dormitorios: 1</li>
            <li>Cantidad de baños: 2</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Antiguedad: 2</li>
            <li>Disposición: 1</li>
            <li>Estado: 2</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Orientacion: 2</li>
            <li>Condición: 1</li>
          </ul>
        </div>
      </div>

    </section>
  )
}
