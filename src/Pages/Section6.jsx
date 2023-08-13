
import { useState } from 'react'
import HeaderSection from '../Components/HeaderSection/HeaderSection'
import Loading from '../Components/Loading/Loading';

export default function Section6() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const open = () => {
    setShow(!show);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }
  return (
    <div className='relative w-screen min-h-screen bg-copper-600' id='section-6'>
      < HeaderSection number={6} text="Confirmar Asistencia" dark={true} />

      <div className="flex items-center justify-center min-h-screen mt-16 bg-gray-100 border">
        {!show ? <button
          className="w-2/3 px-4 py-2 mx-auto mt-6 border rounded-full hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700"
          onClick={open}
        >
          ¿Vas a Ir?
        </button> :
          isLoading ? <Loading /> :
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYs2JZkVHvJLE1-t2U4flIDoSUch0rBLpV2MqKwAnrAlUe3Q/viewform?embedded=true" width="640" height="926" >Cargando…</iframe>
        }
      </div>
    </div>
  )
}
