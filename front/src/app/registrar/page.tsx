import Image from 'next/image'
import Register from '@/components/Register'

export default function page() {
  return (
    <main className='grid grid-cols-2 min-h-screen'>
      <Register />
      
      <div className='bg-register bg-cover bg-center'>
        
      </div>
    </main>
  )
}
