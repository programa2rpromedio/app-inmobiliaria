'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import HeroDetail from '@/components/HeroDetail'
import FormContact from '@/components/FormContact'
import MetrosCuadradosSVG from '@/components/MetrosCuadradosSVG'
import BanioSVG from '@/components/BanioSVG'
import MascotaSVG from '@/components/MascotaSVG'
import HabitacionSVG from '@/components/HabitacionSVG'
import PatioSVG from '@/components/PatioSVG'
import TransporteSVG from '@/components/TransporteSVG'
import FigMap from '../../../../public/Figmap.png'
import CardProperty from '@/components/CardProperty'




export default function Page() {

  let params = useParams()
  console.log(params.id);


  return (
    <main className="w-8/12 mx-auto border border-black p-4 bg-[#F5F5F7]">
      <HeroDetail />

      <section className="mt-4 flex flex-wrap justify-center gap-16">
        <div>
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


        <div className=" min-w-[50%] w-100%  bg-vectorcasa bg-contain bg-no-repeat bg-right">
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

      <section className='bg-[#FFFFFF] rounded-[2rem]'>
        <h2 className='text-[2rem] font-[600] pt-12 px-14 pb-8'>Otras propiedades que pueden ser para ti</h2>
        {/* CARDS PROPIEDADES */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-10 pb-10'>
          <CardProperty />
          <CardProperty />
          <CardProperty />
        </div>
      </section>

    </main >
  )
}


