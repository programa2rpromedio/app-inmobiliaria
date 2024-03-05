import React from 'react'
import { Checkbox, Label } from "flowbite-react";
import { useFormContext } from 'react-hook-form';

type RegisterInput = 'wifi' | 'tv' | 'kitchen' | 'washingMachine' | 'ac' | 'freeParking' | 'paidParking' | 'pool' | 'garden' | 'backyard' | 'jacuzzi' | 'gym' | 'soccerField' | 'bbq' | 'terrace' | 'pets'


interface Props {
  label: string,
  id: string,
  control: RegisterInput
}


export default function InputCheckbox({ id, label, control }: Props) {

  const { register, setValue, formState } = useFormContext()

  return (
    <>
      <div className=" w-[50%]  flex  items-center gap-2">
        <Checkbox id={id} className='border-[#484554] border-[2px] max-[375px]:h-4 max-[375px]:w-4 h-6 w-6' {...register(control)} />
        <Label htmlFor={id}>{label}</Label>
      </div>
      {formState.errors[control] && <p className='text-2 text-[#e94a4a] mt-2'>{formState.errors[control]?.message as string}</p>}
    </>
  )
}
