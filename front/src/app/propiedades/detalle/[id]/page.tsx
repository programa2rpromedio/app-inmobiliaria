'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import HeroDetail from '@/components/HeroDetail'
import Metrospng from '../../../../../public/metros.png'
import Bañopng from '../../../../../public/baño.png'
import Mascotapng from '../../../../../public/mascota.png'
import Habitacionpng from '../../../../../public/habitacion.png'
import Jardinpng from '../../../../../public/jardin.png'
import Transportepng from '../../../../../public/transporte.png'
import FigMap from '../../../../../public/Figmap.png'
import FormContact from '@/components/FormContact'





export default function Page(/*{ params }: { params: { id: string } }*/) {

  let params = useParams()
  console.log(params);
  console.log(params.id);


  return (
    <main className="w-8/12 mx-auto border border-black p-4">
      <HeroDetail />

      <section className="mt-4 flex gap-16">
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


        <div className=" w-[50%] bg-vectorcasa bg-contain">

          <FormContact />
        </div>

      </section>

      <hr className='w-full mb-[25px] mt-[100px] border-[#CAC4D0]' />

      <section className='my-[70px] flex flex-col gap-10'>
        <div className='flex justify-center gap-10'>
          <a href="" className='text-[24px]'>Descripción</a>
          <a href="" className='text-[24px]'>Información Adicional</a>
        </div>
        <div className='mb-[56px]'>
          <p className='text-pretty'>
            Patio cubiertoIngreso por patio techado de vidrio que separa la cocina de un ambiente.La propiedad se entrega con aire acondicionado y piso de parquet.Cocina con espacio de comedor, toda refaccionada. También tiene espacio para un lavarropas.Baño completo, con mampara.
          </p>
          <p> Hermosa y amplia terraza con lavadero.</p>
        </div>

        <div className='flex justify-evenly w-full'>
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

      <hr className='w-full mb-[25px]  border-[#CAC4D0]' />

      <section>
        Otras propiedades que pueden ser para ti
        {/* CARDS PROPIEDADES */}
      </section>

    </main >
  )
}


