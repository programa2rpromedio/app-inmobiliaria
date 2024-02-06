import IniciarSesion from "@/components/IniciarSesion"

export default function page() {
  return (
    <main className='grid grid-cols-2 min-h-screen'>
      <IniciarSesion />      
      <div className='bg-register bg-cover bg-left-bottom'>        
      </div>
    </main>
  )
}
