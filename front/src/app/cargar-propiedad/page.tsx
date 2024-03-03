
'use client'
import Form from "@/components/form-cargar-propiedad/Form";
import ArrowLeftSVG from "@/components/svgs/ArrowLeftSVG";
import { APIProvider } from "@vis.gl/react-google-maps";
import { stepReducer, StepContext } from "@/lib/ContextFormProp";
import { useContext, useReducer } from "react";
const mapsApiKey = "AIzaSyC5Imp84G-XJszq7Iep7djj0kI035RcbJk"


export default function Page() {
  const initialState = 0
  const [step, dispatch] = useReducer(stepReducer, initialState)

  return (
    <StepContext.Provider value={{ step, dispatch }}>
      <main className="">
        <header className="h-20 bg-white flex flex-col justify-between sm:hidden">
          <h3 className="px-4 mt-2">Alquileres Ya!</h3>
          <ArrowLeftSVG className=" text-[#636FFF] mx-4" />
          <div className="flex gap-1 ">
            <hr className="border-[4px] w-[50%] border-[#636FFF]" />
            <hr className="border-[4px] w-[50%]" />
          </div>
        </header>
        <APIProvider apiKey={mapsApiKey}>
          <div className="p-4 min-h-[100vh] sm:px-24">
            <Form />
          </div>
        </APIProvider>
      </main>
    </StepContext.Provider>
  )
}
