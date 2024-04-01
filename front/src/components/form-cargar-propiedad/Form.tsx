'use client'
import React, { useState } from 'react'
import Intro from './Intro';
import FirstStep from './FirstStep';
import { Property } from '@/lib/types';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import IntroSecondPart from './IntroSecondPart';
import FourthStep from './FourthStep';
import { StepContext } from "@/lib/ContextFormProp";
import { useContext } from "react";

const initialState: Property = {
  title: '',
  category: null,
  type: null,
  value: 0,
  currency: "ARS",
  availabilityDate: new Date(),
  description: '',
  province: '',
  city: '',
  addressStreet: '',
  addressNumber: '',
  lat: 0,
  lon: 0,
  totalArea: 0, // Optional property
  coveredArea: 0, // Optional property
  bathrooms: 0,
  rooms: 0,
  bedrooms: 0,
  wifi: false,
  tv: false,
  kitchen: false,
  ac: false,
  freeParking: false,
  paidParking: false,
  washingMachine: false,
  workspace: false,
  pool: false,
  jacuzzi: false,
  gym: false,
  bbq: false,
  backyard: false,
  garden: false,
  soccerField: false,
  terrace: false,
  pets: false,
  age: '', // Optional property
  disposition: '', // Optional property
  orientation: '', // Optional property
  condition: '', // Optional property
  state: '', // Optional property
  status: 'active',
}
export default function Form() {

  const { step } = useContext(StepContext)

  const [formValues, setFormValues] = useState<Property>(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  switch (step) {
    case 0:
      return <Intro />
    case 1:
      return <FirstStep setFormValues={setFormValues} />
    case 2:
      return <SecondStep setFormValues={setFormValues} />
    case 3:
      return <ThirdStep setFormValues={setFormValues} />
    case 4:
      return <IntroSecondPart />
    case 5:
      return <FourthStep setFormValues={setFormValues} formValues={formValues} handleChange={handleChange} />
    default:
      break;
  }


}
