import { useState } from 'react';

import HeaderSection from '../Components/HeaderSection/HeaderSection'
import { PiMapPinLineThin } from 'react-icons/pi';
import { LiaPlaceOfWorshipSolid } from 'react-icons/lia';
import { PiFlowerTulipThin, PiChurchThin } from 'react-icons/pi';
import Modal from '../Components/Modal/Modal';

function Section3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className='relative w-screen min-h-screen' id='section-3'>
      < HeaderSection number={3} text="Donde y Cuando" />
      <div className="flex items-center justify-center w-full h-full mt-16">
        <div className="grid w-full gap-4 p-4 md:gap-8 md:p-8 lg:p-16 sm:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center w-auto h-auto p-2 py-8 rounded bg-copper-50">
            <div className="p-8 rounded-full bg-gradient-to-t from-copper-100 to-copper-200 text bg-copper-600">
              <PiChurchThin className={"text-copper-600 text-9xl"} />
            </div>
            <div className="mt-4 space-y-6 text-center">
              <div>
                <h1 className='text-4xl text-center inspiration md:text-6xl lg:text-8xl xl:text-9xl text-copper-600'>La ceremonia</h1>
                <div className="w-4/5 h-2 mx-auto border-b border-copper-800"></div>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="w-auto p-1 rounded bg-copper-100">
                  <LiaPlaceOfWorshipSolid className='text-5xl text-copper-300' />
                </div>
                <h2 className='px-2 text-xs font-thin leading-relaxed tracking-wide text-justify md:text-xl lg:text-2xl xl:text-4xl text-copper-500'>
                  Parroquia Señora de nuestra señora de la asoledad.
                </h2>
              </div>
              <h3 className='mx-auto text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-copper-600'>06:00 PM - 07:00 PM</h3>
              <div className="flex items-center justify-center py-4">
                <div className="w-auto p-1 rounded bg-copper-100">
                  <PiMapPinLineThin className='text-5xl text-copper-300' />
                </div>
                <h2 className='px-2 text-xs font-thin leading-relaxed text-left md:text-xl lg:text-2xl xl:text-4xl text-copper-500'>
                  Norte 72 #7929 Col. Salvador Diaz Mirón.
                </h2>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-auto h-auto p-2 py-8 rounded bg-copper-50">
            <div className="p-8 rounded-full bg-gradient-to-t from-copper-100 to-copper-200">
              <PiFlowerTulipThin className={"text-copper-600 text-9xl"} />
            </div>
            <div className="mt-4 space-y-6 text-center">
              <div>
                <h1 className='text-4xl text-center inspiration md:text-6xl lg:text-8xl xl:text-9xl text-copper-600'>La recepción</h1>
                <div className="w-4/5 h-2 mx-auto border-b border-copper-800"></div>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="w-auto p-1 rounded bg-copper-100">
                  <LiaPlaceOfWorshipSolid className='text-5xl text-copper-300' />
                </div>
                <h2 className='px-2 text-xs font-thin leading-relaxed tracking-wide text-justify md:text-xl lg:text-2xl xl:text-4xl text-copper-500'>
                  Parroquia Señora de nuestra señora de la asoledad.
                </h2>
              </div>
              <h3 className='mx-auto text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-copper-600'>05:30 PM</h3>
              <div className="flex items-center justify-center py-4">
                <div className="w-auto p-1 rounded bg-copper-100">
                  <PiMapPinLineThin className='text-5xl text-copper-300' />
                </div>
                <h2 className='px-2 text-xs font-thin leading-relaxed text-left md:text-xl lg:text-2xl xl:text-4xl text-copper-500'>
                  Norte 72 #7910, Col. Salvador Diaz Mirón CDMX.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-center p-4">
        <div className="w-full p-8 md:w-3/5">
          <button
            className="w-full px-4 py-2 mt-6 border rounded-full hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700"
            onClick={openModal}
          >
            ¿Cómo llegar ?
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120359.98092139658!2d-99.24194005664059!3d19.487902800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa2bda23ff53%3A0xb2973105a5d3918c!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20la%20Soledad!5e0!3m2!1ses-419!2smx!4v1690662894774!5m2!1ses-419!2smx' title='¿Cómo llegar ?' description='Parroquia de Nuestra Señora de la Soledad.'/>
        </div>
        </div>
    </div>
  )
}


export default Section3
