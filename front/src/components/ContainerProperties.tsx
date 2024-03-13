'use client'
import { instanceAxios } from "@/lib/axios"
import { useEffect, useState } from "react"
import CardProperty from "./CardProperty"
import { PropertyCard } from "@/lib/types"


export default function ContainerProperties() {

  const [properties, setProperties] = useState<PropertyCard[] | undefined>()



  useEffect(() => {
    instanceAxios.get('/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {
        properties?.length ? properties.map(prop => {
          return <CardProperty key={prop.propertyId} {...prop} />
        })
          :
          <h2>No hay propiedades </h2>
      }
    </>
  )
}
