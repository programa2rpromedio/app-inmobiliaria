import React from 'react'
import Step from './Step'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsFormCargarPropiedad } from '@/lib/types'
import { Button } from '../ui/button';
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";
import ControllerStepsForm from './ControllerStepsForm';

const formSchema = z.object({
  age: z.optional(z.string()),
  disposition: z.optional(z.string()),
  orientation: z.optional(z.string()),
  condition: z.optional(z.string()),
  state: z.optional(z.string()),
  totalArea: z.optional(z.coerce.number()),
  coveredArea: z.optional(z.coerce.number()),
})

type FormSchema = z.infer<typeof formSchema>


export default function ThirdStep(props: PropsFormCargarPropiedad) {

  const { dispatch } = useContext(StepContext)

  const handleNextStep = () => {
    dispatch({
      type: 'next'
    })
  }

  const { setFormValues } = props
  const { register, handleSubmit, formState, setValue, } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })


  const onSubmit = (data: FormSchema) => {
    console.log(data);
    setFormValues((prev) => ({ ...prev, ...data }))
    handleNextStep()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  return (
    <Step title='Paso 1 - Datos de la propiedad' description='Comencemos con los datos y características
    de la propiedad.'>
      <>
        <h2 className='font-medium'>Caracteristicas</h2>
        <form className='flex flex-wrap gap-y-4 gap-x-3 mt-4 justify-center sm:justify-normal' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="text" placeholder="Años de antigüedad" id="age" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('age')} onChange={handleChange} />
          </div>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="text" placeholder="Disposición" id="disposition" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('disposition')} onChange={handleChange} />
          </div>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="text" placeholder="Orientación" id="orientation" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('orientation')} onChange={handleChange} />
          </div>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="text" placeholder="Condición" id="condition" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('condition')} onChange={handleChange} />
          </div>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="text" placeholder="Estado" id="state" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('state')} onChange={handleChange} />
          </div>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="number" placeholder="Metros cuadrados totales" id="totalArea" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('totalArea')} onChange={handleChange} />
          </div>
          <div className='w-[100%] sm:w-[50%]'>
            <input type="number" placeholder="Metros cuadrados cubiertos" id="coveredArea" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('coveredArea')} onChange={handleChange} />
          </div>

          <Button variant="default" size="lg" className='w-full mt-20 sm:hidden'>Siguiente</Button>
          <ControllerStepsForm />
        </form>
      </>
    </Step>
  )
}
