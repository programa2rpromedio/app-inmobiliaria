import React from 'react'
import MetrosCuadradosSVG from '@/components/svgs/MetrosCuadradosSVG'
import BanioSVG from '@/components/svgs/BathroomSVG'
import MascotaSVG from '@/components/svgs/MascotaSVG'
import HabitacionSVG from '@/components/svgs/HabitacionSVG'
import PatioSVG from '@/components/svgs/PatioSVG'

interface Props {
  coveredArea: number | undefined
  bathrooms: number | undefined
  bedrooms: number | undefined
  pets: boolean | undefined
  garden: boolean | undefined
}

export default function CharacteristicsPropertie({ coveredArea, bathrooms, bedrooms, pets, garden }: Props) {
  return (
    <div className="flex flex-wrap gap-5 ">
      <div className="w-[4.5rem] xl:w-[5rem] md:h-[4.5rem] p-1  bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <MetrosCuadradosSVG />
        <span className="text-whiteA-12">{coveredArea} mt<sup>2</sup></span>
      </div>
      <div className="w-[4.5rem] xl:w-[5rem] md:h-[4.5rem] p-1  bg-secondary  text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <BanioSVG />
        <span className="text-whiteA-12">{bathrooms}</span>
      </div>
      <div className="w-[4.5rem] xl:w-[5rem] md:h-[4.5rem] p-1  bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <MascotaSVG />
        <span className="text-whiteA-12">{pets ? 'Si' : 'No'}</span>
      </div>
      <div className="w-[4.5rem] xl:w-[5rem] md:h-[4.5rem] p-1  bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <HabitacionSVG />
        <span className="text-whiteA-12">{bedrooms}</span>
      </div>
      <div className="w-[4.5rem] xl:w-[5rem] md:h-[4.5rem] p-1  bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <PatioSVG />
        <strong className="text-whiteA-12">{garden ? 'Si' : 'No'}</strong>
      </div>
    </div>
  )
}
