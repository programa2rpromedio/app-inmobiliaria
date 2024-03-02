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
      <div className="flex flex-col gap-4 mb-8">
        <h3 className="text-primary">Paso 2</h3>
        <h4 className="font-[600]">¡Descríbenos cómo es tu propiedad y publícala!</h4>
        <p className="text-pretty">En este último paso, ¡nos encantaría saber cómo es tu propiedad y lo genial que se ve!</p>
        <p className="text-pretty">Haz que resalte tu publicación con unas fotos y finalmente decide el precio que mejor se acomode a tu oferta.</p>
      </div>
      <Image src={VectorLivingRoom.src} width={357} height={259} alt="vector interior casa" />
      <div className="flex flex-col gap-2 mt-8">
        <Button variant="default" size="lg" onClick={handleNextStep} >Siguiente</Button>
      </div>
    </>
  )
}
