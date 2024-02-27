'use client'
import React, { useState } from 'react'
import Intro from './Intro';
import FirstStep from './FirstStep';

export default function Form() {

  const [step, setStep] = useState<number>(0)
  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }
  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  switch (step) {
    case 0:
      return <Intro handleNextStep={handleNextStep} />
    case 1:
      return <FirstStep />
    default:
      break;
  }


}
