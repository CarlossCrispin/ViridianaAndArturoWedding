
import HeaderSection from '../Components/HeaderSection/HeaderSection'
import { PiGiftThin } from 'react-icons/pi';

function Section4() {
  return (
    <div className='relative w-screen bg-copper-600' id='section-4'>
      < HeaderSection number={4} text="Outfit & Regalos" dark={true} />
      <div className="w-full h-screen mt-16">
        <div className='flex flex-col items-center justify-center md:space-y-36'>
          <div className='flex-col items-center justify-center mx-auto md:flex'>
            <div className="flex items-center justify-center md:w-2/3">
              <div className="w-1/3">
                <img
                  src="./img/vestido-de-novia.png"
                  alt="Imagen"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-center w-2/3 p-4">
                <h3 className='text-sm font-thin leading-loose text-left text-white md:text-2xl '> Opten por atuendos en los que se sientan elegantes y cómodos, reflejando su estilo único. Lo esencial es que irradien felicidad, al igual que nosotros. ¡Gracias por ser parte de nuestra historia y esta inolvidable celebración!</h3>

              </div>
            </div>
          </div>
          <div className='flex-col items-center justify-center mx-auto md:flex'>
            <div className="md:w-2/3 md:flex">

              <div className="items-center justify-center p-4 md:flex md:w-2/3">
                <h3 className='text-sm font-thin leading-loose text-left text-white md:text-2xl '>En este día de amor y unión, su presencia es el regalo más preciado. Si desean agregar un toque más, nuestra mesa de regalos está aquí para ustedes. ¡Gracias por compartir este día tan especial con nosotros!</h3>

              </div>
              <div className="flex items-center justify-center md:w-1/3">
                <PiGiftThin className={"text-copper-100 text-9xl"} />
              </div>
            </div>
            <div className='flex items-center justify-center '>

              <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51245484" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 mt-24 text-xs text-center border rounded-full hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700 md:text-2xl">Ir a la mesa de regalos</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section4