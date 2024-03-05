import React from 'react'
import { Button } from "@/components/ui/button";
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";

export default function ControllerSteps() {

  const { step, dispatch } = useContext(StepContext)

  const handleNextStep = () => {
    dispatch({
      type: 'next'
    })
  }

  return (
    <section className={`h-32 bg-white hidden flex-col  fixed bottom-0 left-0 w-full ${step === 0 || step === 4 ? 'sm:flex ' : 'sm:hidden'} `}>
      <div className="flex gap-1 ">
        <hr className="border-[4px] w-[50%] border-[#636FFF]" />
        <hr className={`border-[4px] w-[50%] ${step >= 4 ? 'border-[#636FFF]' : null}`} />
      </div>
      <div className="flex justify-between my-auto px-20">
        <Button size='lg' variant='outline' className='bg-white' onClick={() => window.location.href = 'http://localhost:3000/home'} > Salir </Button>
        <Button size='lg' onClick={handleNextStep}> Comenzar </Button>
      </div>
    </section>
  )
}
