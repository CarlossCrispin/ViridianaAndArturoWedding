
import HeaderSection from '../Components/HeaderSection/HeaderSection'
import { PiGiftThin } from 'react-icons/pi';

function Section4() {
  return (
    <div className='relative w-screen bg-copper-600' id='section-4'>
      < HeaderSection number={4} text="Outfit & Regalos" dark={true} />
      <div className="flex flex-col items-center justify-center w-full h-screen mt-16 space-y-40">
        <div className="flex items-center justify-center">
          <div className="w-4/5 overflow-hidden rounded-lg bg-copper-100">
            <div className="flex">
              <div className="flex items-center justify-center w-3/5 p-4">
                <h3 className='text-sm font-thin leading-loose text-left text-copper-600 md:text-5xl inspiration'> Opten por atuendos en los que se sientan elegantes y cómodos, reflejando su estilo único. Lo esencial es que irradien felicidad, al igual que nosotros. ¡Gracias por ser parte de nuestra historia y esta inolvidable celebración!</h3>

              </div>
              <div className="w-2/5 p-8 rounded-lg bg-copper-200">
                <img
                  src="./img/vestido-de-novia.png"
                  alt="Imagen"
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-4/5 overflow-hidden rounded-lg bg-copper-100">
            <div className="flex">
              <div className="flex items-center justify-center w-2/5 p-2 bg-copper-200">
                <PiGiftThin className={"text-copper-100 text-9xl"} />
              </div>
              <div className="w-3/5 p-4">
                <h3 className='text-sm font-thin leading-loose text-left text-copper-600 md:text-5xl inspiration'>En este día de amor y unión, su presencia es el regalo más preciado. Si desean agregar un toque más, nuestra mesa de regalos está aquí para ustedes. ¡Gracias por compartir este día tan especial con nosotros!</h3>
                <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51245484" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 mt-6 text-xs text-center border rounded-full hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700">mesa de regalos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4