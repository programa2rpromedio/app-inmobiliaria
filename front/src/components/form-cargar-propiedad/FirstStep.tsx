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

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsFormCargarPropiedad, propertyCategory } from '@/lib/types'

const formSchema = z.object({
  address_street: z.string({
    required_error: 'El nombre es requerido'
  }),
  address_number: z.string().min(1, {
    message: "Campo requerido",
  }),
  city: z.string().min(1, {
    message: "Campo requerido",
  }),
  province: z.string().min(1, {
    message: "Campo requerido",
  }),
})

type FormSchema = z.infer<typeof formSchema>



export default function FirstStep(props: PropsFormCargarPropiedad) {

  const { setFormValues, handleNextStep } = props
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');
  const [selectTypeProperty, setSelectTypeProperty] = useState<propertyCategory>(null)
  const [isSelectedProperty, setIsSelectedProperty] = useState<boolean>()
  const [resultMaps, setResultMaps] = useState({
    address_street: '',
    address_number: '',
    city: '',
    province: '',
    lat: 0,
    lng: 0
  })
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const { register, handleSubmit, formState, setValue, } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    if (selectTypeProperty == null) return setIsSelectedProperty(false)
    setIsSelectedProperty(true)
    setFormValues((prev) => ({ ...prev, ...data, lat: resultMaps.lat, lng: resultMaps.lng, category: selectTypeProperty, }))
    // TODO fetch 👇
    handleNextStep()
  }

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      componentRestrictions: { country: "ar" },
      fields: ['geometry', 'name', 'formatted_address', 'address_components']
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));

  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      const place = placeAutocomplete.getPlace()
      if (place) {
        const address = fillInAddress(place);

        if (address == undefined) return
        setResultMaps(address);
        setValue('address_street', address.address_street);
        setValue('address_number', address.address_number);
        setValue('city', address.city);
        setValue('province', address.province);

      }
    });
  }, [placeAutocomplete, setValue]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResultMaps((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectTypeProperty = (type: propertyCategory) => {
    if (selectTypeProperty === type) {
      setSelectTypeProperty(null)
    }
    setSelectTypeProperty(type)
    setIsSelectedProperty(true)
  }



  return (
    <Step title='Paso 1 - Datos de la propiedad' description='Comencemos con los datos y características
    de la propiedad.'>
      <section>
        <h2 className='font-medium'>Tipo de propiedad</h2>
        {isSelectedProperty == false ? <p className='text-2 text-[#e94a4a] mt-2'>Debe seleccionar un tipo de propiedad</p> : null}
        <div className='flex flex-wrap mt-5 justify-between'>
          <Image src={Casa} alt='Casa' width={100} height={100} id='house' className={selectTypeProperty === 'house' ? 'border border-primary' : ''} onClick={(e: React.MouseEvent<HTMLImageElement>) => handleSelectTypeProperty(e.currentTarget.id as propertyCategory)
          } />
          <Image src={Departamento} alt='Departamento' width={100} height={100} id='apartment' className={selectTypeProperty === 'apartment' ? 'border border-primary' : ''} onClick={(e: React.MouseEvent<HTMLImageElement>) => handleSelectTypeProperty(e.currentTarget.id as propertyCategory)
          } />
          <Image src={Cabin} alt='Cabin' width={100} height={100} id='cabin' className={selectTypeProperty === 'cabin' ? 'border border-primary' : ''} onClick={(e: React.MouseEvent<HTMLImageElement>) => handleSelectTypeProperty(e.currentTarget.id as propertyCategory)
          } />
          <Image src={Hotel} alt='Hotel' width={100} height={100} id='hotel' className={selectTypeProperty === 'hotel' ? 'border border-primary' : ''} onClick={(e: React.MouseEvent<HTMLImageElement>) => handleSelectTypeProperty(e.currentTarget.id as propertyCategory)
          } />
          <Image src={Quinta} alt='Quinta' width={100} height={100} id='country-house' className={selectTypeProperty === 'country-house' ? 'border border-primary' : ''} onClick={(e: React.MouseEvent<HTMLImageElement>) => handleSelectTypeProperty(e.currentTarget.id as propertyCategory)
          } />
          <Image src={Camping} alt='Camping' width={100} height={100} id='camping' className={selectTypeProperty === 'camping' ? 'border border-primary' : ''} onClick={(e: React.MouseEvent<HTMLImageElement>) => handleSelectTypeProperty(e.currentTarget.id as propertyCategory)
          } />
        </div>
        <h2 className='mt-5 font-medium'>Ubicacion</h2>
        <form className='flex flex-wrap gap-y-4 gap-x-3 mt-4 justify-center' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[48%] max-[340px]:w-[100%] sm:w-[49%]'>
            <input type="text" placeholder="Calle" id="location-input" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={resultMaps.address_street} {...register('address_street')} onChange={handleChange} ref={inputRef} />
            {formState.errors.address_street && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.address_street?.message}</p>}
          </div>

          <div className='w-[48%] max-[340px]:w-[100%] sm:w-[49%]'>
            <input type="text" placeholder="Numero" id='address_number' className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={resultMaps.address_number} {...register('address_number')} onChange={handleChange} />
            {formState.errors.address_number && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.address_number.message}</p>}
          </div>

          <div className='w-[99%] sm:w-[99%]'>
            <input type="text" placeholder="City" id="locality-input" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={resultMaps.city} {...register('city')} onChange={handleChange} />
            {formState.errors.city && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.city.message}</p>}
          </div>

          <div className='w-[99%] sm:w-[99%]'>
            <input type="text" className="half-input w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent" placeholder="Provincia" id="administrative_area_level_1-input" value={resultMaps?.province} {...register('province')} onChange={handleChange} />
            {formState.errors.province && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.province.message}</p>}
          </div>

          <Button variant="default" size="lg" className='w-full mt-20'>Siguiente</Button>
        </form>
      </section>
    </Step>
  )
}