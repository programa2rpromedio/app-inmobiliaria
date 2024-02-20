import Image from 'next/image'
import HeroDetail from '@/components/HeroDetail'
import Metrospng from '../../../public/metros.png'
import Bañopng from '../../../public/baño.png'
import Mascotapng from '../../../public/mascota.png'
import Habitacionpng from '../../../public/habitacion.png'
import Jardinpng from '../../../public/jardin.png'
import Transportepng from '../../../public/transporte.png'
import FigMap from '../../../public/Figmap.png'
import VectorCasa from '../../../public/vector_casa.png'
import FormContact from '@/components/FormContact'





export default function page() {


  return (
    <main className="w-8/12 mx-auto border border-black p-4">
      <HeroDetail />

      <section className="mt-4 flex">
        <div>
          <div className="flex gap-5">
            <div className="w-[85px] h-[91px] bg-secondary flex flex-col justify-center items-center rounded-lg">
              <Image
                src={Metrospng}
                alt="Picture of the author"
                className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                width={39}
                height={35}
              />
              <span className="text-whiteA-12">75 mt</span>
            </div>
            <div className="w-[85px] h-[91px] bg-secondary flex flex-col justify-center items-center rounded-lg">
              <Image
                src={Bañopng}
                alt="Picture of the author"
                className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                width={39}
                height={35}
              />
              <span className="text-whiteA-12">2</span>
            </div>
            <div className="w-[85px] h-[91px] bg-secondary flex flex-col justify-center items-center rounded-lg">
              <Image
                src={Mascotapng}
                alt="Picture of the author"
                className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                width={39}
                height={35}
              />
              <span className="text-whiteA-12">si</span>
            </div>
            <div className="w-[85px] h-[91px] bg-secondary flex flex-col justify-center items-center rounded-lg">
              <Image
                src={Habitacionpng}
                alt="Picture of the author"
                className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                width={39}
                height={35}
              />
              <span className="text-whiteA-12">2</span>
            </div>
            <div className="w-[85px] h-[91px] bg-secondary flex flex-col justify-center items-center rounded-lg">
              <Image
                src={Jardinpng}
                alt="Picture of the author"
                className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                width={39}
                height={35}
              />
              <strong className="text-whiteA-12">si</strong>
            </div>
            <div className="w-[85px] h-[91px] bg-secondary flex flex-col justify-center items-center rounded-lg">
              <Image
                src={Transportepng}
                alt="Picture of the author"
                className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                width={39}
                height={35}
              />
              <span className="text-whiteA-12">100 mts</span>
            </div>
          </div>

          <div className="w-[474px] mt-8">
            <p>
              ¡Te presentamos el departamento ideal en Almagro!
              A pocos metros de la linea B de Subte.
              A 100 metros de Av. Corrientes
            </p>
          </div>

          <div className="mt-8">
            <Image
              src={FigMap}
              alt="Picture of the author"
              className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
              width={581}
              height={396}
            />
          </div>
        </div>


        <div className="border border-blackA-11 w-[50%] bg-vectorcasa bg-cover">
          <FormContact />
        </div>

      </section>

    </main >
  )
}


