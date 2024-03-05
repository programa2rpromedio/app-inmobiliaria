import { Button } from "@/components/ui/button"
import { Grid } from '@radix-ui/themes'
import Image from 'next/image'

import CasaPic1 from '@/images/casa1.png'
import CasaPic2 from '@/images/casa2.png'
import CasaPic3 from '@/images/casa3.png'
import CasaPic4 from '@/images/casa4.png'
import CasaPic5 from '@/images/casa5.png'


const HeroDetail = () => {

  return (
    <>
      <section className=" w-full flex justify-between">
        <div>
          <h2 className="font-sans font-bold text-[2rem] ">Sarmiento 4100 . $350.000</h2>
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
    </>
  )



}


export default HeroDetail