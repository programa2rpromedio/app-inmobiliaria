
'use client'
import Form from "@/components/form-cargar-propiedad/Form";
import { APIProvider } from "@vis.gl/react-google-maps";

const mapsApiKey = "AIzaSyC5Imp84G-XJszq7Iep7djj0kI035RcbJk"


export default function Page() {
  return (
    <main className="p-4">
      <div className="flex gap-1 mb-2.5">
        <hr className="border-[4px] w-[50%] border-primary" />
        <hr className="border-[4px] w-[50%]" />
      </div>
      <APIProvider apiKey={mapsApiKey}>
        <Form />
      </APIProvider>
    </main>
  )
}
