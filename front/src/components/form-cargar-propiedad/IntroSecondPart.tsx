import React from 'react'
import VectorLivingRoom from '@/images/living-room.png'
import Image from 'next/image'
import { Button } from '../ui/button'

interface IntroProps {
  handleNextStep?: () => void;  // Optional prop
  // Other props as needed
}


export default function IntroSecondPart({ handleNextStep }: IntroProps) {
  return (
    <>
      <div className="hidden sm:flex sm:h-[100vh] sm:items-center sm:justify-center">
        <div className="flex flex-col gap-4 mb-8  sm:w-[50%]">
          <h3 className="text-primary sm:text-[1.5rem]">Paso 2</h3>
          <h4 className="font-[600] sm:text-[1.5rem]">¡Descríbenos cómo es tu propiedad y publícala!</h4>
          <p className="text-pretty ">En este último paso, ¡nos encantaría saber cómo es tu propiedad y lo genial que se ve!</p>
          <p className="text-pretty">Haz que resalte tu publicación con unas fotos y finalmente decide el precio que mejor se acomode a tu oferta.</p>
        </div>
        <Image src={VectorLivingRoom.src} width={357} height={259} alt="vector interior casa" className="sm:hidden" />
        <Image src={VectorLivingRoom.src} width={600} height={600} alt="vector interior casa" className="hidden sm:block" />
        <div className="flex flex-col gap-2 mt-8 sm:hidden">
          <Button variant="default" size="lg" onClick={handleNextStep} >Siguiente</Button>
        </div>
      </div>

    </>
  )
}
