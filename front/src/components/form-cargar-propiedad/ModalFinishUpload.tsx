import React, { useRef } from 'react'
import { Button } from '../ui/button'
import CelebrationSVG from '../svgs/CelebrationSVG'

interface Props {
  state: 'success' | 'error'
}

export default function ModalFinishUpload({ state }: Props) {

  const refModal = useRef(null)

  const closeModal = () => {
    if (refModal.current == null) return

    (refModal.current as HTMLElement).style.display = 'none'
  }

  return (
    <div ref={refModal} onClick={closeModal} className='z-30 min-h-[100vh] h-[100%] w-[100vw] bg-[#2222223c] absolute left-0 top-0 flex justify-center items-center'>
      <div className='bg-[#fff]  w-[90%]'>
        <div className='p-1' onClick={closeModal}>X</div>
        <div className='p-4 flex flex-col items-center gap-5'>
          {
            state === 'success' ?
              <>
                <CelebrationSVG className='text-[#19BC86] w-14 h-14 ' />
                <h2 className='font-bold text-[#3354FF] text-[1.2rem]'>¡Felicitaciones! </h2>
                <h3>Tu propiedad ha sido publicada con éxito.</h3>
                <Button variant='default' size='lg' >Ver publicacion</Button>
              </>
              :
              <>
                <strong>❌</strong>
                <h2 className='font-bold text-[#d94242] text-[1.2rem]'>¡Error al cargar la propiedad! </h2>
                <h3>Vuelva a intentarlo.</h3>
                <Button variant='default' size='lg' className='bg-[#d94242]' >Cerrar</Button>
              </>
          }
        </div>
      </div>
    </div>
  )
}
