// import React from 'react'
import Step from './Step'
import Image from 'next/image'
import Casa from '@/images/casa.svg'
import Cabin from '@/images/cabania.svg'
import Departamento from '@/images/departamento.svg'
import Hotel from '@/images/hotel.svg'
import Camping from '@/images/camping.svg'
import Quinta from '@/images/quinta.svg'
import { Button } from '../ui/button'
import React, { useRef, useEffect, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import fillInAddress from '@/lib/fillInAdress'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsFormCargarPropiedad, propertyCategory } from '@/lib/types'
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";
import ControllerSteps from './ControllerStepsIntros'
import ControllerStepsForm from './ControllerStepsForm'

const formSchema = z.object({
  addressStreet: z.string({
    required_error: 'El nombre es requerido'
  }),
  addressNumber: z.string().min(1, {
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

  const { dispatch } = useContext(StepContext)

  const handleNextStep = () => {
    dispatch({
      type: 'next'
    })
  }


  const { setFormValues } = props
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');
  const [selectTypeProperty, setSelectTypeProperty] = useState<propertyCategory>(null)
  const [isSelectedProperty, setIsSelectedProperty] = useState<boolean>()
  const [resultMaps, setResultMaps] = useState({
    addressStreet: '',
    addressNumber: '',
    city: '',
    province: '',
    lat: 0,
    lon: 0
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
    setFormValues((prev) => ({ ...prev, ...data, lat: resultMaps.lat, lon: resultMaps.lon, category: selectTypeProperty, }))
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
        setValue('addressStreet', address.addressStreet);
        setValue('addressNumber', address.addressNumber);
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
      <section className='sm:w-[80%]'>
        <h2 className='font-medium'>Tipo de propiedad</h2>
        {isSelectedProperty == false ? <p className='text-2 text-[#e94a4a] mt-2'>Debe seleccionar un tipo de propiedad</p> : null}
        <div className='flex flex-wrap mt-5 justify-between sm:gap-5 sm:justify-normal'>
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
        <form className='flex flex-wrap gap-y-4 gap-x-3 mt-4 justify-center sm:justify-normal ' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[48%] max-[340px]:w-[100%] sm:w-[29%]'>
            <input type="text" placeholder="Calle" id="location-input" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={resultMaps.addressStreet} {...register('addressStreet')} onChange={handleChange} ref={inputRef} />
            {formState.errors.addressStreet && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.addressStreet?.message}</p>}
          </div>

          <div className='w-[48%] max-[340px]:w-[100%] sm:w-[29%]'>
            <input type="text" placeholder="Numero" id='addressNumber' className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={resultMaps.addressNumber} {...register('addressNumber')} onChange={handleChange} />
            {formState.errors.addressNumber && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.addressNumber.message}</p>}
          </div>

          <div className='w-[99%] sm:w-[29%]'>
            <input type="text" placeholder="City" id="locality-input" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent' value={resultMaps.city} {...register('city')} onChange={handleChange} />
            {formState.errors.city && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.city.message}</p>}
          </div>

          <div className='w-[99%] sm:w-[29%]'>
            <input type="text" className="half-input w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent" placeholder="Provincia" id="administrative_area_level_1-input" value={resultMaps?.province} {...register('province')} onChange={handleChange} />
            {formState.errors.province && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.province.message}</p>}
          </div>

          <Button variant="default" size="lg" className='w-full mt-20 sm:hidden'>Siguiente</Button>
          <ControllerStepsForm />
        </form>
      </section>
    </Step>
  )
}
