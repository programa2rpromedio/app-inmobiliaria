// import React from 'react'
import Step from './Step'
import Image from 'next/image'
import Casa from '@/images/casa.png'
import Cabin from '@/images/cabaña.png'
import Departamento from '@/images/departamento.png'
import Hotel from '@/images/hotel.png'
import Camping from '@/images/camping.png'
import Quinta from '@/images/quinta.png'
import { Button } from '../ui/button'

import React, { useRef, useEffect, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import fillInAddress from '@/lib/fillInAdress'

export default function FirstStep() {

  const [formValues, setFormValues] = useState({
    address_street: '',
    address_number: '',
    city: '',
    province: ''
  })

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      componentRestrictions: { country: "ar" },
      fields: ['geometry', 'name', 'formatted_address', 'address_components']
    };
    console.log(places);
    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));

  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;
    console.log(placeAutocomplete);

    placeAutocomplete.addListener('place_changed', () => {
      setSelectedPlace(placeAutocomplete.getPlace());

    });
  }, [setSelectedPlace, placeAutocomplete]);

  useEffect(() => {
    let result = fillInAddress(selectedPlace)
    if (result == undefined) return
    setFormValues(result)
  }, [selectedPlace])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Step title='Paso 1 - Datos de la propiedad' description='Comencemos con los datos y características
    de la propiedad.'>
      <section>
        <h2 className='font-medium'>Tipo de propiedad</h2>
        <div className='flex flex-wrap mt-5 justify-between'>
          <Image src={Casa} alt='Casa' width={100} height={100} />
          <Image src={Departamento} alt='Departamento' width={100} height={100} />
          <Image src={Cabin} alt='Cabin' width={100} height={100} />
          <Image src={Hotel} alt='Hotel' width={100} height={100} />
          <Image src={Quinta} alt='Quinta' width={100} height={100} />
          <Image src={Camping} alt='Camping' width={100} height={100} />
        </div>
        <h2 className='mt-5 font-medium'>Ubicacion</h2>
        {JSON.stringify(selectedPlace)}
        <form className='flex flex-wrap gap-y-4 gap-x-3 mt-4' onSubmit={(e) => e.preventDefault()}>
          <input type="text" ref={inputRef} placeholder="Calle" name='address_street' id="location-input" className='w-[48%] py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={formValues.address_street} onChange={handleChange} />
          <input type="text" placeholder="Numero" name='address_number' id='address_number' className='w-[48%] py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={formValues.address_number} onChange={handleChange} />
          <input type="text" placeholder="City" name='city' id="locality-input" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={formValues.city} onChange={handleChange} />
          <input type="text" className="half-input w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent" name='province' placeholder="Provincia" id="administrative_area_level_1-input" value={formValues.province} onChange={handleChange} />
          <button className="button-cta ">Checkout</button>
        </form>
        <Button variant="default" size="lg" className='w-full mt-20'>Siguiente</Button>
      </section>
    </Step>
  )
}
