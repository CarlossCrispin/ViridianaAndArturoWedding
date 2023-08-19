
import HeaderSection from '../Components/HeaderSection/HeaderSection'

export default function Section6() {


  return (
    <div className='relative w-screen bg-copper-600' id='section-6'>
      < HeaderSection number={6} text="Confirmar Asistencia" dark={true} />
      <div className="flex items-center justify-center h-screen bg-white">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiunqcAqiO88hbvT3OFz92-vdkfc0q5igcxnOJjIDdu5Y9wA/viewform?embedded=true" width="640" height="926" className='mt-12'>Cargando…</iframe>
      </div>
      {/*  <div className="flex items-center justify-center mt-16 bg-gray-100 border h-[50vh]">
        {!show ? <button
          className="w-2/3 px-4 py-2 mx-auto mt-6 border rounded-full hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700"
          onClick={open}
        >
          ¿Vas a Ir?
        </button> :
          isLoading ? <Loading /> :
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYs2JZkVHvJLE1-t2U4flIDoSUch0rBLpV2MqKwAnrAlUe3Q/viewform?embedded=true" width="640" height="926" >Cargando…</iframe>
        }
      </div> */}
    </div>
  )
}
