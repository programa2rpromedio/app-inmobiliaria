import Step from './Step'
import { Button } from '../ui/button'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsFormCargarPropiedad } from '@/lib/types'
import { Alert } from "flowbite-react";


const formSchema = z.object({
  rooms: z.number({
    required_error: 'Campo requerido'
  }),
  bedrooms: z.number({
    required_error: "Campo requerido",
  }),
  bathrooms: z.number({
    required_error: "Campo requerido",
  }),
  wifi: z.boolean({
    required_error: "Campo requerido",
  }),
  tv: z.boolean({
    required_error: "Campo requerido",
  }),
  kitchen: z.boolean({
    required_error: "Campo requerido",
  }),
  washing_machine: z.boolean({
    required_error: "Campo requerido",
  }),
  ac: z.boolean({
    required_error: "Campo requerido",
  }),
  free_parking: z.boolean({
    required_error: "Campo requerido",
  }),
  paid_parking: z.boolean({
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
  soccer_field: z.boolean({
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


export default function SecondStep() {

  const { register, handleSubmit, formState, setValue, } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data);

  }

  return (
    <Step title={'Paso 1 - Datos de la propiedad'} description={'Comencemos con los datos y características de la propiedad'}>
      <form action="">
        <h2>Ambientes</h2>

        <div className='flex items-center justify-between'>
          <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de ambientes:</label>
          <div className="relative flex items-center max-w-[10rem] gap-4">
            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-[50%] p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
              </svg>
            </button>

            <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className=" bg-transparent border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-primary focus:border-primary block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500" placeholder="0" required />

            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-[50%] p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </div>

      </form>

    </Step>
  )
}
