'use client'
import React from 'react'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { instanceAxios } from '@/lib/axios'




const formSchema = z.object({
  username: z.string({
    required_error: 'El nombre es requerido'
  }).min(3, { message: "Debe tener 3 o más caracteres" }),
  email: z.string().email({
    message: "Email inválido",
  }).min(1, {
    message: "Campo requerido",
  }),
  phone: z.coerce.number({

    invalid_type_error: 'Se esperaba un número de telefono',
    required_error: 'Número de telefono requerido'
  }),
  message: z.string()
})

type FormSchema = z.infer<typeof formSchema>


interface Props {
  idProperty: string | null
}

export default function FormContact({ idProperty }: Props) {

  const { register, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "Hola! Vi ésta propiedad en Alquileres Ya! Me interesaría que nos pongamos en contacto."
    }
  })

  const onSubmit = async (data: FormSchema) => {
    try {
      const response = await instanceAxios.post(`mail/contact/${idProperty}`, data)
      //Todo mostart salida ok
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="mx-auto  max-w-xl px-[8px]  bg-[#ffffffdf] rounded-[22px] shadow-lg md:mr-[10px] lg:mr-[110px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className='font-medium text-[24px] text-center pt-[40px] pb-[25px]'>¡Dejales tus datos al anunciante!</h2>
      <hr className='w-[270px] mx-auto mb-[25px]  border-[#B0B0B0]' />
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 justify-items-center">
        <div className='sm:col-span-2 w-[80%]'>
          <div className="mt-2.5">
            <input
              type="text"
              {...register("username")}
              id="username"
              placeholder='Nombre'
              autoComplete="given-name"
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.username && <p className='text-2 text-[#e94a4a]'>{formState.errors.username.message}</p>}
          </div>
        </div>
        <div className="sm:col-span-2 w-[80%]">
          <div className="mt-2.5">
            <input
              type="text"
              {...register("email")}
              id="email"
              placeholder='Correo electrónico'
              autoComplete="email"
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.email && <p className='text-2 text-[#e94a4a]'>{formState.errors.email.message}</p>}
          </div>
        </div>
        <div className="sm:col-span-2 w-[80%]">
          <div className="relative mt-2.5">
            <input
              type="tel"
              {...register("phone")}
              id="phone"
              placeholder='Numero de telefono'
              autoComplete="tel"
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.phone && <p className='text-2 text-[#e94a4a]'>{formState.errors.phone.message}</p>}
          </div>
        </div>
        <div className="sm:col-span-2 w-[80%]">
          <label htmlFor="message " className="block text-sm font-semibold leading-6 text-gray-900">
            Consulta:
          </label>
          <div className="mt-2.5">
            <textarea
              {...register("message")}
              id="message "
              rows={4}
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.message && <p className='text-2 text-[#e94a4a]'>{formState.errors.message.message}</p>}
          </div>
        </div>
      </div>
      <div className="mt-10 pb-[34px] ">
        <Button variant='default' className='block m-auto ' size='lg'>Contactar</Button>
      </div>
    </form>
  )
}
