import React from 'react'
import MetrosCuadradosSVG from '@/components/MetrosCuadradosSVG'
import BanioSVG from '@/components/BanioSVG'
import MascotaSVG from '@/components/MascotaSVG'
import HabitacionSVG from '@/components/HabitacionSVG'
import PatioSVG from '@/components/PatioSVG'
import TransporteSVG from '@/components/TransporteSVG'


export default function CharacteristicsPropertie() {
  return (
    <div className="flex flex-wrap gap-5 ">
      <div className="w-[5rem]  bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <MetrosCuadradosSVG />
        <span className="text-whiteA-12">75 mt</span>
      </div>
      <div className="w-[5rem] h-[91px] bg-secondary  text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <BanioSVG />
        <span className="text-whiteA-12">2</span>
      </div>
      <div className="w-[5rem] h-[91px] bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <MascotaSVG />
        <span className="text-whiteA-12">si</span>
      </div>
      <div className="w-[5rem] h-[91px] bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <HabitacionSVG />
        <span className="text-whiteA-12">2</span>
      </div>
      <div className="w-[5rem] h-[91px] bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <PatioSVG />
        <strong className="text-whiteA-12">si</strong>
      </div>
      <div className="w-[5rem] h-[91px] bg-secondary text-[white] flex flex-col justify-evenly items-center rounded-lg">
        <TransporteSVG />
        <span className="text-whiteA-12">100 mts</span>
      </div>
    </div>
  )
}
