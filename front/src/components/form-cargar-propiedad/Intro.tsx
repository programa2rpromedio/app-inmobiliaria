import Image from "next/image";
import VectorInteriorCasa from '@/images/vector_interior_casa.png'
import { Button } from "@/components/ui/button";
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";

export default function Intro() {

  const { dispatch } = useContext(StepContext)

  const handleNextStep = () => {
    dispatch({
      type: 'next'
    })
  }


  return (
    <>
      <div className="max-[767]:hidden sm:flex sm:h-[80vh] sm:items-center sm:justify-center">
        <div className="flex flex-col gap-4 sm:w-[50%]">
          <h3 className="text-primary sm:text-[1.5rem]">Paso 1</h3>
          <h4 className="font-[600] sm:text-[1.5rem]">Cuentanos un poco de tu propiedad</h4>
          <p className="text-pretty">Para poder subir tu oferta de inmueble exitosamente con nosotros, necesitaremos saber las características de tu alojamiento, desde servicios y ubicación, hasta otras comodidades que se incluyen para tus posibles inquilinos</p>
        </div>
        <Image src={VectorInteriorCasa.src} width={357} height={259} alt="vector interior casa" className="sm:hidden" />
        <Image src={VectorInteriorCasa.src} width={600} height={600} alt="vector interior casa" className="hidden sm:block" />
        <div className="flex flex-col gap-2 mt-8 sm:hidden">
          <Button variant="default" size="lg" onClick={handleNextStep} >Comenzar</Button>
          <Button variant="outline" size="lg" >Salir</Button>
        </div>
      </div>
    </>
  )
}
