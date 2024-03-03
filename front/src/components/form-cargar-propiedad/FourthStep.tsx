import React, { useRef, useState } from 'react'
import Step from './Step'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Property, PropsFormCargarPropiedad } from '@/lib/types'
import { Button } from '../ui/button';
import { FileInput, Select, Textarea } from 'flowbite-react';
import ModalFinishUpload from './ModalFinishUpload';
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";

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
  value: z.coerce.number({
    required_error: 'Campo requerido'
  }).min(1, "El número debe ser mayor o igual a 1.").positive().int(),

})

type FormSchema = z.infer<typeof formSchema>

interface FourthStepProps extends PropsFormCargarPropiedad {
  formValues: Property,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | any>) => void
}


export default function FourthStep(props: FourthStepProps) {

  const { dispatch } = useContext(StepContext)

  const handleNextStep = () => {
    dispatch({
      type: 'next'
    })
  }

  const { setFormValues, formValues, handleChange } = props
  const { register, handleSubmit, formState, setValue, } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })
  const [isFinishUpload, setIsFinishUpload] = useState<boolean>()

  const refForm = useRef(null)
  const formData = new FormData()


  const onSubmit = (data: FormSchema) => {
    if (!refForm.current) return
    let files = refForm.current as HTMLFormElement
    Object.entries(formValues).forEach(([key, value]) => {

      formData.append(key, value)
    });
    for (const file of files.files) {
      formData.append('images', file); // Agrega cada archivo a FormData
    }
    //TODO user id dinamico
    formData.append('userId', "65be79c8fb9ed4e11f260524")

    fetch('http://localhost:8080/api/properties', {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then(data => setIsFinishUpload(true))
      .catch(err => setIsFinishUpload(false)
      )
    handleNextStep()
  }




  return (
    <Step title='Paso 2 - Publicación' description='Ahora preparemos tu publicación.'>
      <>
        <form className='mt-10 sm:w-[70%]' encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)} >
          <div className='w-[100%] mt-5'>
            <h2 className='text-[#000000] mb-4'>Titulo del anuncio</h2>
            <input type="text" placeholder="Titulo del anuncio" id="value" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('title')} onChange={handleChange} />
            {formState.errors.title && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.title?.message}</p>}
          </div>

          <div className='mt-5'>
            <h2 className='text-[#000000]'>Descripción</h2>
            <Textarea id="description" placeholder="Describe brevemente tu propiedad." required rows={4}  {...register('description')} onChange={handleChange} />
            {formState.errors.description && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.description?.message}</p>}
          </div>

          <div className='mt-5'>
            <h2 className='text-[#000000] mb-4'>Agregar fotos</h2>
            <p>Agrega hasta 5 fotos para mostrar tu propiedad.</p>
            <FileInput id="images" multiple className='mt-5' name='images' required ref={refForm} />
          </div>

          <div className='mt-5'>
            <h2 className='text-[#000000] mb-4'>Tipo de operación</h2>
            <Select id="type" required {...register('type')} onChange={handleChange} >
              <option>{ }</option>
              <option value='permanent'>Permanente</option>
              <option value='temporary'>Temporario</option>
            </Select>
            {formState.errors.type && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.type?.message}</p>}
          </div>

          <div className='w-[100%] mt-5'>
            <input type="number" placeholder="Precio por mes" id="value" className='w-full py-3 px-6 rounded-[10px] border-[#999999] border bg-transparent'  {...register('value')} onChange={handleChange} />
            {formState.errors.value && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors.value?.message}</p>}
          </div>

          <Button variant="default" size="lg" className='w-full mt-20 sm:hidden'>Siguiente</Button>

        </form>
        {isFinishUpload && < ModalFinishUpload state='success' />}
        {isFinishUpload === false && < ModalFinishUpload state='error' />}
      </>

    </Step >
  )
}
