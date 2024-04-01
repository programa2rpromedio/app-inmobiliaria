import { Button } from "@/components/ui/button"
import { Grid } from '@radix-ui/themes'
import Image from 'next/image'
import placeHolder from '@/images/placeholder.jpg'
import { useEffect, useState } from "react"
import { instanceAxios } from "@/lib/axios"



interface Props {
  propertyId: string | null
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

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: any;
  role: string;
  city: string;
  address: string;
  phone: string;
  favourites?: any[];
  token: string;
}



const HeroDetail = ({ value, addressStreet, addressNumber, city, province, category, propertyPictures, propertyId }: Props) => {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


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


  const handleAddFavorite = () => {
    // if (user) {
    //   instanceAxios.patch(`/users/${user._id}/favourites/${propertyId}`, { headers: { 'Authorization': user.token } })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }
  }

  return (
    <>
      <section className="w-full flex flex-col md:flex-row md:justify-between gap-y-2 mb-4">
        <div>
          <h2 className="font-sans font-bold text-[2rem] ">{addressStreet} {addressNumber}. ${value}</h2>
          <h4>{categoryName} en alquiler en {city}, {province}</h4>
        </div>

        <div className="flex gap-3">
          <Button variant='outline' disabled={user ? false : true} onClick={handleAddFavorite}>Guardar</Button>
          <Button variant='outline' onClick={() => {
            window.location.href = '/propiedades'
          }}>Decartar</Button>
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