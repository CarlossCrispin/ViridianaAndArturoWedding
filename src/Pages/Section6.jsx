
import HeaderSection from '../Components/HeaderSection/HeaderSection'

export default function Section6() {


  return (
    <div className='relative w-screen bg-copper-600' id='section-6'>
      < HeaderSection number={6} text="Confirmar Asistencia" dark={true} />
      <div className="flex items-center justify-center h-screen p-8">
        <div className='w-2/3 text-sm text-white md:text-2xl lg:text-4xl'>
          <h2>Su confirmación nos ayudará a garantizar que todo esté preparado para recibirlos de la mejor manera.

          </h2>
          <h2 className='mt-16'>

            Si necesitan alguna información adicional de nuestra parte para la planificación o tienen alguna pregunta, no duden en hacérnoslo saber. Estamos entusiasmados por la oportunidad de celebrar junto a ustedes y crear recuerdos memorables en este día tan especial.


          </h2>
          <h2 className='mt-16'>

            Por favor, envíennos su confirmación a la brevedad posible. ¡Esperamos con emoción el día y poder compartir con ustedes esta alegría!

          </h2>
        </div>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiunqcAqiO88hbvT3OFz92-vdkfc0q5igcxnOJjIDdu5Y9wA/viewform?embedded=true" width="640" height="926" className='mt-12'>Cargando…</iframe> */}
        
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
