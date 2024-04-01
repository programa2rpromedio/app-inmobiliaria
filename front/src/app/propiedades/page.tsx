'use client'
import ContainerProperties from "@/components/ContainerProperties";
import Header from "@/components/Header";
import { instanceAxios } from "@/lib/axios";
import { PropertyCard } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {

  const [properties, setProperties] = useState<PropertyCard[] | undefined>()

  const getProperties = async (filter: string) => {
    try {
      if (filter === undefined) throw new Error('Filtro invalido')
      if (filter === ' ' || filter === '') {
        const response = await instanceAxios.get(`/properties`)
        if (!response.data.length) throw new Error('Filtro invalido')
        return setProperties(response.data)
      }
      let city = filter.slice(0, 1).toLocaleUpperCase() + filter.slice(1)
      const response = await instanceAxios.get(`/properties?city=${city}`)
      if (!response.data.length) throw new Error('Filtro invalido')
      setProperties(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const searchParams = useSearchParams();
  const city = searchParams.get("city");




  useEffect(() => {
    if (city === null) {
      instanceAxios.get(`/properties`)
        .then(res => setProperties(res.data))
        .catch(err => console.log(err))
    } else {
      instanceAxios.get(`/properties/?city=${city}`)
        .then(res => setProperties(res.data))
        .catch(err => console.log(err))
    }
  }, [city])


  return (
    <>
      <Header getProperties={getProperties} />
      <main className=" w-full lg:w-8/12 mx-auto justify-center p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-9 mt-4">
        <ContainerProperties properties={properties} />
      </main>
    </>
  )
}