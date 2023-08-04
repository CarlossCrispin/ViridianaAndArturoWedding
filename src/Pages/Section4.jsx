
import HeaderSection from '../Components/HeaderSection/HeaderSection'
import { PiGiftThin, PiDressThin, PiHoodieThin } from 'react-icons/pi';

function Section4() {
  return (
    <div className='relative w-screen min-h-screen bg-copper-600' id='section-4'>
      < HeaderSection number={4} text="Outfit & Regalos" dark={true} />
      <div className="flex items-center justify-center w-full h-screen mt-16">
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          {/* Primer div */}
          <div className="p-8 border rounded-full"> <PiHoodieThin className={"text-copper-100 text-9xl"} /></div>
          {/* Segundo div */}
          <div className="p-8 border rounded-full"> <PiDressThin className={"text-copper-100 text-9xl"} /></div>
          {/* Tercer div */}
          <div className="p-8 border rounded-full"> <PiGiftThin className={"text-copper-100 text-9xl"} /></div>
        </div>
      </div>
    </div>
  )
}

export default Section4