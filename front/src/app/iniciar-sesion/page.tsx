import IniciarSesion from "@/components/IniciarSesion"

export default function Page() {
  return (
    <main className='grid grid-cols-1  sm:grid-cols-2 min-h-screen'>
      <IniciarSesion />
      <div className='bg-register bg-center h-[350px] bg-no-repeat w-full m-auto bg-contain  sm:bg-cover sm:bg-left-bottom sm:h-[60vh] lg:h-[80vh] sm:w-full xl:bg-contain xl:h-[90vh]'>

      </div>
    </main>
  )
}
