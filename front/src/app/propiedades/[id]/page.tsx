'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import HeroDetail from '@/components/HeroDetail'
import FormContact from '@/components/FormContact'
import CharacteristicsProperties from '@/components/CharacteristicsPropertie'
import DescriptionPropertie from '@/components/DescriptionPropertie'
import OtherProperties from '@/components/OtherProperties'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const mapsApiKey = "AIzaSyC5Imp84G-XJszq7Iep7djj0kI035RcbJk"
const position = { "lat": -34.905877, "lng": -57.9585137 }

export default function Page() {

  let params = useParams()
  console.log(params.id);


  return (
    <main className="w-8/12 mx-auto border border-black p-4 bg-[#F5F5F7]">
      <HeroDetail />

      <section className="mt-4 flex flex-wrap md:justify-between sm:justify-center min-[1160px]:gap-8">
        <div className='sm:w-full min-[1160px]:w-[45%]'>
          <CharacteristicsProperties />
          <div className="max-w-[474px] mt-8">
            <p>
              ¡Te presentamos el departamento ideal en Almagro!
              A pocos metros de la linea B de Subte.
              A 100 metros de Av. Corrientes
            </p>
          </div>
          <div className="mt-8 w-full">
            <APIProvider apiKey={mapsApiKey}>
              <Map defaultCenter={position} defaultZoom={12} className='md:h-96 sm:h-52 h-40  w-full'>
                <Marker position={position} />
              </Map>
            </APIProvider>
          </div>
        </div>
        <div className="min-[1160px]:w-[50%] w-full sm:mt-8  min-[1160px]:mt-0  bg-vectorcasa bg-contain bg-no-repeat bg-right">
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


