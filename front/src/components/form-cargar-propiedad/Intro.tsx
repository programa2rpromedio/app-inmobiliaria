import Image from "next/image";
import VectorInteriorCasa from '@/images/vector_interior_casa.png'
import { Button } from "@/components/ui/button";

interface IntroProps {
  handleNextStep?: () => void;  // Optional prop
  // Other props as needed
}

export default function Intro(props: IntroProps) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-primary">Paso 1</h3>
        <h4 className="font-[600]">Cuentanos un poco de tu propiedad</h4>
        <p className="text-pretty">Para poder subir tu oferta de inmueble exitosamente con nosotros, necesitaremos saber las características de tu alojamiento, desde servicios y ubicación, hasta otras comodidades que se incluyen para tus posibles inquilinos</p>
      </div>
      <Image src={VectorInteriorCasa.src} width={357} height={259} alt="vector interior casa" />
      <div className="flex flex-col gap-2 mt-8">
        <Button variant="default" size="lg" onClick={props.handleNextStep} >Comenzar</Button>
        <Button variant="outline" size="lg" >Salir</Button>
      </div>
    </>
  )
}
