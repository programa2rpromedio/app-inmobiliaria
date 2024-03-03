import Step from './Step'
import { Button } from '../ui/button'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsFormCargarPropiedad } from '@/lib/types'
import InputNumber from './InputNumber'
import InputCheckbox from './InputCheckbox';
import { Checkbox, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";


const formSchema = z.object({
  rooms: z.coerce.number({
    required_error: 'Campo requerido'
  }).min(1, "El número debe ser mayor o igual a 1.").positive().int(),
  bedrooms: z.coerce.number({
    required_error: 'Campo requerido'
  }).min(1, "El número debe ser mayor o igual a 1.").positive().int(),
  bathrooms: z.coerce.number({
    required_error: 'Campo requerido'
  }).min(1, "El número debe ser mayor o igual a 1.").positive().int(),
  wifi: z.boolean({
    required_error: "Campo requerido",
  }),
  tv: z.boolean({
    required_error: "Campo requerido",
  }),
  kitchen: z.boolean({
    required_error: "Campo requerido",
  }),
  washingMachine: z.boolean({
    required_error: "Campo requerido",
  }),
  ac: z.boolean({
    required_error: "Campo requerido",
  }),
  freeParking: z.boolean({
    required_error: "Campo requerido",
  }),
  paidParking: z.boolean({
    required_error: "Campo requerido",
  }),
  pool: z.boolean({
    required_error: "Campo requerido",
  }),
  garden: z.boolean({
    required_error: "Campo requerido",
  }),
  backyard: z.boolean({
    required_error: "Campo requerido",
  }),
  jacuzzi: z.boolean({
    required_error: "Campo requerido",
  }),
  gym: z.boolean({
    required_error: "Campo requerido",
  }),
  soccerField: z.boolean({
    required_error: "Campo requerido",
  }),
  bbq: z.boolean({
    required_error: "Campo requerido",
  }),
  terrace: z.boolean({
    required_error: "Campo requerido",
  }),
  pets: z.boolean({
    required_error: "Campo requerido",
  }),
})

type FormSchema = z.infer<typeof formSchema>


export default function SecondStep(props: PropsFormCargarPropiedad) {

  const { dispatch } = useContext(StepContext)

  const handleNextStep = () => {
    dispatch({
      type: 'next'
    })
  }

  const { setFormValues } = props
  const [toggle, setToggle] = useState(false)
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const { handleSubmit, formState, register } = methods


  const onSubmit = (data: FormSchema) => {
    console.log(data);
    setFormValues((prev) => ({ ...prev, ...data }))
    handleNextStep()
  }

  return (
    <FormProvider {...methods}  >
      <Step title={'Paso 1 - Datos de la propiedad'} description={'Comencemos con los datos y características de la propiedad'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className='text-[#484554]'>Ambientes</h2>


            <InputNumber control='rooms' label='ambientes' id='rooms' key='rooms' />
            <InputNumber control='bedrooms' label='dormitorios' id='bedrooms' key='bedrooms' />
            <InputNumber control='bathrooms' label='baños' id='bathrooms' key='bathrooms' />

          </div>
          <div className='mt-7'>
            <h2 className='text-[#484554]'>Servicios</h2>
            <div className='mt-2 flex flex-wrap gap-y-4'>
              <InputCheckbox control='wifi' id='wifi' label='WiFi' key='wifi' />
              <InputCheckbox control='ac' id='ac' label='Aire acondicionado' key='ac' />
              <InputCheckbox control='tv' id='tv' label='Televisor' key='tv' />
              <InputCheckbox control='freeParking' id='freeParking' label='Estacionamiento gratis' key='freeParking' />
              <InputCheckbox control='kitchen' id='kitchen' label='Cocina' key='kitchen' />
              <InputCheckbox control='paidParking' id='paidParking' label='Estacionamiento pago' key='paidParking' />
              <InputCheckbox control='washingMachine' id='washingMachine' label='Lavarropas' key='washingMachine' />
            </div>
            <h2 className='text-[#484554] mt-6'>Otras comodidades</h2>
            <div className='mt-2 flex flex-wrap gap-y-4'>
              <InputCheckbox control='pool' id='pool' label='Piscina' key='pool' />
              <InputCheckbox control='backyard' id='backyard' label='Patio' key='backyard' />
              <InputCheckbox control='jacuzzi' id='jacuzzi' label='Jacuzzi' key='jacuzzi' />
              <InputCheckbox control='garden' id='garden' label='Jardín' key='garden' />
              <InputCheckbox control='gym' id='gym' label='Gimnasio' key='gym' />
              <InputCheckbox control='soccerField' id='soccerField' label='Cancha de fútbol' key='soccerField' />
              <InputCheckbox control='bbq' id='bbq' label='Parrilla' key='bbq' />
              <InputCheckbox control='terrace' id='terrace' label='Terraza' key='terrace' />
            </div>
          </div>

          <label className="inline-flex items-center cursor-pointer mt-12">
            <Checkbox className='sr-only peer' {...register('pets')} onChange={() => {
              setToggle((prev) => !prev)
            }} />
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-[1rem] peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-[1rem] after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Acepta mascotas</span>
          </label>


          <Button variant="default" size="lg" className='w-full mt-20 sm:hidden'>Siguiente</Button>

        </form>

      </Step>
    </FormProvider >
  )
}
