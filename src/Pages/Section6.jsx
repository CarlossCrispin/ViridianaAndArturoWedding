
import { useState } from 'react'
import HeaderSection from '../Components/HeaderSection/HeaderSection'

export default function Section6() {
  const [show, setShow] = useState(false);


  const open = () => {
    setShow(!show);
  }
  return (
    <div className='relative w-screen min-h-screen bg-copper-600' id='section-6'>
      < HeaderSection number={6} text="Confirmar Asistencia" dark={true} />
      <div className="flex justify-center mx-auto">
        <button
          className="w-2/3 px-4 py-2 mx-auto mt-6 border rounded-full hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700"
          onClick={open}
        >
          {!show ? '¿Vas a Ir?' : 'Cerrar'}
        </button>
      </div>
      {show &&
        <div className="flex items-center justify-center min-h-screen mt-16 bg-gray-100 border">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYs2JZkVHvJLE1-t2U4flIDoSUch0rBLpV2MqKwAnrAlUe3Q/viewform?embedded=true" width="640" height="926" >Cargando…</iframe>
        </div>
      }
    </div>
  )
}
