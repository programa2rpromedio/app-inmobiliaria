import React from 'react'
import { Button } from '../ui/button'
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";

export default function ControllerStepsForm() {

  const { step, dispatch } = useContext(StepContext)


  const handlePrevStep = () => {
    dispatch({
      type: 'prev'
    })
  }



  return (
    <div className="h-32 hidden sm:flex justify-between items-center my-auto px-20 fixed bottom-0 left-0 w-full bg-white">
      <Button size='lg' variant='outline' className='bg-white' onClick={handlePrevStep} > Atras </Button>
      <Button size='lg' type='submit' > {step === 5 ? 'Publicar' : 'Siguiente'} </Button>
    </div>
  )
}
