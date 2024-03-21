import Image from 'next/image'
import Register from '@/components/Register'

export default function page() {
  return (
    <main className='grid grid-cols-1  sm:grid-cols-2 min-h-screen'>
      <Register />

      <div className='bg-register h-[250px] bg-no-repeat w-[250px] m-auto bg-contain  sm:bg-cover sm:bg-left-bottom sm:h-[60vh] lg:h-[80vh] sm:w-full lg:bg-contain'>

      </div>
    </main>
  )
}
