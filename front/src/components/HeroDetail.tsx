import { Button } from "@/components/ui/button"
import { Grid } from '@radix-ui/themes'
import Image from 'next/image'
import placeHolder from '@/images/placeholder.jpg'



interface Props {
  value: number | undefined
  addressStreet: string | undefined
  addressNumber: string | undefined
  city: string | undefined
  province: string | undefined
  category: string | undefined
  propertyPictures: {
    url: string,
    public_id: string,
    _id: string
  }[] | undefined
}


const HeroDetail = ({ value, addressStreet, addressNumber, city, province, category, propertyPictures }: Props) => {

  let categoryName = ''

  switch (category) {
    case 'house':
      categoryName = 'Casa'
      break;
    case 'apartment':
      categoryName = 'Departamento'
      break;
    case 'cabin':
      categoryName = 'Cabaña'
      break;
    case 'hotel':
      categoryName = 'Hotel'
      break;
    case 'country-house':
      categoryName = 'Quinta'
      break;
    case 'camping':
      categoryName = 'Camping'
      break;
    default:
      categoryName = ''
      break;
  }


  return (
    <>
      <section className="w-full flex flex-col md:flex-row md:justify-between gap-y-2 mb-4">
        <div>
          <h2 className="font-sans font-bold text-[2rem] ">{addressStreet} {addressNumber}. ${value}</h2>
          <h4>{categoryName} en alquiler en {city}, {province}</h4>
        </div>

        <div className="flex gap-3">
          <Button variant='outline'>Guardar</Button>
          <Button variant='outline'>Decartar</Button>
        </div>
      </section>

      <Grid columns='3' rows='2' className="gap-1 md:gap-4 mt-4"  >
        <Image
          src={propertyPictures?.length ? propertyPictures[0].url : placeHolder.src}
          alt="Picture of the author"
          className="row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
          width={574}
          height={503}
        />
        <Image
          src={propertyPictures?.length ? propertyPictures[1]?.url : placeHolder.src}
          alt="Picture of the author"
          className="w-full"
          width={277}
          height={248}
        />
        <Image
          src={propertyPictures?.length ? propertyPictures[2]?.url : placeHolder.src}
          alt="Picture of the author"
          className=" w-full rounded-tr-[20px]"
          width={277}
          height={248}
        />
        <Image
          src={propertyPictures?.length ? propertyPictures[3]?.url : placeHolder.src}
          alt="Picture of the author"
          className="col-start-2  w-full "
          width={277}
          height={248}
        />
        <Image
          src={propertyPictures?.length ? propertyPictures[4]?.url : placeHolder.src}
          alt="Picture of the author"
          className="col-start-3  w-full rounded-br-[20px]"
          width={277}
          height={248}
        />
      </Grid>
      {/* <div className="mt-4">
        <h4>Oferta publicada hace tres dias</h4>
      </div> */}
    </>
  )



}


export default HeroDetail