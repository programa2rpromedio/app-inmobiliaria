import { instanceAxios } from '@/lib/axios';
import { PropertyCard } from '@/lib/types'
import Link from 'next/link'

export default function CardFavorite(prop: PropertyCard) {

  const { title, value, city, province, coveredArea, rooms, pets, bedrooms, propertyPictures, propertyId } = prop

  console.log(rooms);

  const handleClick = () => {
    const response = confirm('¿Seguro que desea eliminar la propiedad?')
    if (response === true) {
      instanceAxios.delete(`/properties/${propertyId}`)
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className={`w-[275px] h-[375px] bg-cover bg-no-repeat bg-center flex flex-col justify-between`} style={{ backgroundImage: `url(${propertyPictures[0].url})` }}>
      <strong className=' block mr-0 w-1/4 self-end text-primary cursor-pointer font-bold  text-center hover:bg-[#e5e5e7]  text-[2rem]' onClick={handleClick}>X</strong>
      <Link href={`/propiedades/[id]?id=${propertyId}`} className='w-full h-[90%] bg-black bg-opacity-30 p-4 flex flex-col justify-end'>
        <strong className='text-white font-bold '>Alquiler en {city}, {province}</strong><br />
        <strong className='text-white font-bold'> {rooms} {rooms && rooms > 1 ? 'Ambientes' : 'Ambiente'}</strong>
      </Link>
    </div>
  )
}
