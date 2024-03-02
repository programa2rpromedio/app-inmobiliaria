import React, { useRef } from 'react'
import Step from './Step'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Property, PropsFormCargarPropiedad } from '@/lib/types'
import { Button } from '../ui/button';
import { FileInput, Select, Textarea } from 'flowbite-react';

const permanentType = z.literal("permanent");
const temporaryType = z.literal("temporary");

const formSchema = z.object({
  title: z.string({
    required_error: 'Campo requerido'
  }).min(1, {
    message: 'Debe contener al menos 1 carácter.'
  }),
  description: z.string({
    required_error: 'Campo requerido'
  }),
  type: permanentType.or(temporaryType).nullable(),
  price: z.coerce.number({
    required_error: 'Campo requerido'
  }).min(1, "El número debe ser mayor o igual a 1.").positive().int(),

})

type FormSchema = z.infer<typeof formSchema>

interface FourthStepProps extends PropsFormCargarPropiedad {
  formValues: Property
}


const initialState: Property = {
  title: '',
  category: null,
  type: null,
  price: 0,
  currency: "ARS",
  availabilityDate: new Date(),
  description: '',
  province: '',
  city: '',
  addressStreet: '',
  addressNumber: '',
  lat: 0,
  lng: 0,
  totalArea: 0, // Optional property
  coveredArea: 0, // Optional property
  bathrooms: 0,
  rooms: 0,
  bedrooms: 0,
  wifi: false,
  tv: false,
  kitchen: false,
  ac: false,
  freeParking: false,
  paidParking: false,
  washingMachine: false,
  workspace: false,
  pool: false,
  jacuzzi: false,
  gym: false,
  bbq: false,
  backyard: false,
  garden: false,
  soccerField: false,
  terrace: false,
  pets: false,
  age: '', // Optional property
  disposition: '', // Optional property
  orientation: '', // Optional property
  condition: '', // Optional property
  state: '', // Optional property
  status: 'active',
}



export default function FourthStep(props: FourthStepProps) {
  const { handleNextStep, setFormValues, formValues } = props
  const { register, handleSubmit, formState, setValue, } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })
  let dataAEnviar = {
    "userId": "65be79c8fb9ed4e11f260524",
    "title": "Propiedad",
    "category": "house",
    "type": "permanent",
    "price": 0,
    "currency": "ARS",
    "description": "Buena propiedad",
    "province": "Buenos Aires",
    "city": "La Plata",
    "addressStreet": "40",
    "addressNumber": "531",
    "lat": 0,
    "lng": 0,
    "totalArea": 10,
    "coveredArea": 20,
    "bathrooms": 1,
    "rooms": 1,
    "bedrooms": 1,
    "wifi": false,
    "tv": false,
    "kitchen": false,
    "ac": false,
    "freeParking": false,
    "paidParking": false,
    "washingMachine": false,
    "workspace": false,
    "pool": false,
    "jacuzzi": false,
    "gym": false,
    "bbq": false,
    "backyard": false,
    "garden": false,
    "soccerField": false,
    "terrace": false,
    "pets": false,
    "age": "",
    "disposition": "",
    "orientation": "",
    "condition": "",
    "state": "",
    "status": "active"
  }
  const refForm = useRef(null)

  const onSubmit = (data: FormSchema) => {
    // console.log(data);
    const formData = new FormData()
    if (!refForm.current) return
    let files = refForm.current as HTMLFormElement
    setFormValues((prev) => ({ ...prev, ...data, }))
    Object.entries(formValues).forEach(([key, value]) => {

      formData.append(key, value)
    });
    formData.append('propertyPictures', files?.files)
    formData.append('userId ', "65be79c8fb9ed4e11f260524")
    // for (const pair of Array.from(formData.entries())) {
    //   console.log(pair[0], pair[1]);
    // }
    fetch('http://localhost:8080/api/properties', {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    }).then(res => res.json()).then(data => console.log(data)
    ).catch(err => console.log(err)
    )
    // handleNextStep()
  }



  return (
    <Step title='Paso 2 - Publicación' description='Ahora preparemos tu publicación.'>
      <form className='mt-10' encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)} >
        <div className='w-[100%] mt-5'>
          <h2 className='text-[#000000] mb-4'>Titulo del anuncio</h2>
          <input type="text" placeholder="Titulo del anuncio" id="price" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('title')} />
          {formState.errors.title && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.title?.message}</p>}
        </div>

        <div className='mt-5'>
          <h2 className='text-[#000000]'>Descripción</h2>
          <Textarea id="description" placeholder="Describe brevemente tu propiedad." required rows={4}  {...register('description')} />
          {formState.errors.description && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.description?.message}</p>}
        </div>

        <div className='mt-5'>
          <h2 className='text-[#000000] mb-4'>Agregar fotos</h2>
          <p>Agrega hasta 5 fotos para mostrar tu propiedad.</p>
          <FileInput id="files" multiple className='mt-5' name='files' required ref={refForm} />
        </div>

        <div className='mt-5'>
          <h2 className='text-[#000000] mb-4'>Tipo de operación</h2>
          <Select id="type" required {...register('type')}>
            <option>{ }</option>
            <option value='permanent'>Permanente</option>
            <option value='temporary'>Temporario</option>
          </Select>
          {formState.errors.type && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.type?.message}</p>}
        </div>

        <div className='w-[100%] mt-5'>
          <input type="number" placeholder="Precio por mes" id="price" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('price')} />
          {formState.errors.price && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.price?.message}</p>}
        </div>

        <Button variant="default" size="lg" className='w-full mt-20'>Publicar</Button>

      </form>
    </Step >
  )
}
