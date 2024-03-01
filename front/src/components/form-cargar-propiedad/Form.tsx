'use client'
import React, { useState } from 'react'
import Intro from './Intro';
import FirstStep from './FirstStep';
import { Property } from '@/lib/types';

const initialState: Property = {
  title: '',
  category: null,
  type: null,
  price: 0,
  currency: "ARS",
  availability_date: new Date(),
  description: '',
  province: '',
  city: '',
  address_street: '',
  address_number: '',

  lat: 0,
  lng: 0,

  total_area: 0, // Optional property
  covered_area: 0, // Optional property
  bathrooms: 0,
  rooms: 0,
  bedrooms: 0,
  wifi: false,
  tv: false,
  kitchen: false,
  ac: false,
  free_parking: false,
  paid_parking: false,
  washing_machine: false,
  workspace: false,
  pool: false,
  jacuzzi: false,
  gym: false,
  bbq: false,
  backyard: false,
  garden: false,
  soccer_field: false,
  terrace: false,
  pets: false,
  age: '', // Optional property
  disposition: '', // Optional property
  orientation: '', // Optional property
  condition: '', // Optional property
  state: '', // Optional property
  status: null,
}
export default function Form() {

  const [step, setStep] = useState<number>(0)
  const [formValues, setFormValues] = useState<Property>(initialState)

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }
  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  switch (step) {
    case 0:
      return <Intro handleNextStep={handleNextStep} />
    case 1:
      return <FirstStep setFormValues={setFormValues} handleNextStep={handleNextStep} />
    case 2:
      return <h1>Segundo steep</h1>
    default:
      break;
  }


}
