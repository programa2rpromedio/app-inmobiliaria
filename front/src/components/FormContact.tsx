'use client'
import React from 'react'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'




const formSchema = z.object({
  nombre: z.string({
    required_error: 'El nombre es requerido'
  }).min(3, { message: "Debe tener 3 o más caracteres" }),
  email: z.string().email({
    message: "Email inválido",
  }).min(1, {
    message: "Campo requerido",
  }),
  consulta: z.string()
})

type FormSchema = z.infer<typeof formSchema>



export default function FormContact() {

  const { register, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consulta: "Hola! Vi ésta propiedad en App inmobiliaria. Me interesaría que nos pongamos en contacto."
    }
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data);
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
              {...register("nombre")}
              id="nombre"
              placeholder='Nombre'
              autoComplete="given-name"
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.nombre && <p className='text-2 text-[#e94a4a]'>{formState.errors.nombre.message}</p>}
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
              name="phone-number"
              id="phone-number"
              placeholder='Numero de telefono'
              autoComplete="tel"
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2 w-[80%]">
          <label htmlFor="consulta" className="block text-sm font-semibold leading-6 text-gray-900">
            Consulta:
          </label>
          <div className="mt-2.5">
            <textarea
              {...register("consulta")}
              id="consulta"
              rows={4}
              className="block w-full py-[16px] px-[12px] rounded-md border-0   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formState.errors.consulta && <p className='text-2 text-[#e94a4a]'>{formState.errors.consulta.message}</p>}
          </div>
        </div>
      </div>
      <div className="mt-10 pb-[34px] ">
        <Button variant='default' className='block m-auto ' size='lg'>Contactar</Button>
      </div>
    </form>
  )
}
