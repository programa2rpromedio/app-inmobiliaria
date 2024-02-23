'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import HeroDetail from '@/components/HeroDetail'
import FormContact from '@/components/FormContact'
import CharacteristicsProperties from '@/components/CharacteristicsPropertie'
import DescriptionPropertie from '@/components/DescriptionPropertie'
import OtherProperties from '@/components/OtherProperties'
import FigMap from '../../../../public/Figmap.png'




export default function Page() {

  let params = useParams()
  console.log(params.id);


  return (
    <main className="w-8/12 mx-auto border border-black p-4 bg-[#F5F5F7]">
      <HeroDetail />

      <section className="mt-4 flex flex-wrap justify-between gap-16">
        <div>
          <CharacteristicsProperties />
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
      <DescriptionPropertie />
      <hr className='w-full mb-[25px]  border-[#CAC4D0]' />

      <OtherProperties />

    </main >
  )
}


