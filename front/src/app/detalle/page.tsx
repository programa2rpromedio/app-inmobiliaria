import { Button } from "@/components/ui/button"
import { Grid } from '@radix-ui/themes'
import Image from 'next/image'
import CasaPic1 from '@/images/casa1.png'
import CasaPic2 from '@/images/casa2.png'
import CasaPic3 from '@/images/casa3.png'
import CasaPic4 from '@/images/casa4.png'
import CasaPic5 from '@/images/casa5.png'
import Metrospng from '../../../public/metros.png'
import Bañopng from '../../../public/baño.png'
import Mascotapng from '../../../public/mascota.png'
import Habitacionpng from '../../../public/habitacion.png'
import Jardinpng from '../../../public/jardin.png'
import Transportepng from '../../../public/transporte.png'
import FigMap from '../../../public/Figmap.png'
import VectorCasa from '../../../public/vector_casa.png'


export default function page() {
  return (
    <main className="w-8/12 mx-auto border border-black p-4">
      <section className=" w-full flex justify-between">
        <div>
          <h2 className="font-sans font-bold ">Sarmiento 4100 . $350.000</h2>
          <h4>Departamento en alquiler en Almagro, Capital Federal</h4>
        </div>

        <div className="flex gap-3">
          <Button variant='outline'>Guardar</Button>
          <Button variant='outline'>Decartar</Button>
        </div>
      </section>

      <Grid columns='3' rows='2' className="gap-4 mt-4"  >
        <Image
          src={CasaPic1}
          alt="Picture of the author"
          className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
          width={574}
          height={503}
        />
        <Image

          src={CasaPic2}
          alt="Picture of the author"
          className="w-full"
          width={277}
          height={248}
        />
        <Image
          src={CasaPic3}
          alt="Picture of the author"
          className=" w-full rounded-tr-[20px]"
          width={277}
          height={248}
        />
        <Image
          src={CasaPic4}
          alt="Picture of the author"
          className="col-start-2  w-full "
          width={277}
          height={248}
        />
        <Image
          src={CasaPic5}
          alt="Picture of the author"
          className="col-start-3  w-full rounded-br-[20px]"
        />
      </Grid>
      <div className="mt-4">
        <h4>Oferta publicada hace tres dias</h4>
      </div>

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

          <div>
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
          <form action="">

          </form>
        </div>
      </section>
    </main >
  )
}


