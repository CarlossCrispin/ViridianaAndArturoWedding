import { useState } from 'react';

import HeaderSection from '../Components/HeaderSection/HeaderSection'
import { PiMapPinLineThin } from 'react-icons/pi';
import { PiChampagneThin, PiWarehouseThin } from 'react-icons/pi';
import Modal from '../Components/Modal/Modal';

const Section5 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='relative w-screen min-h-screen' id='section-5'>
      < HeaderSection number={5} text="Locación del Evento" />
      <div className="flex items-center justify-center w-full h-full mt-16">
        <div className="flex flex-col items-center justify-center w-auto h-auto p-2 py-8 rounded bg-copper-50">
          <div className="p-8 rounded-full bg-gradient-to-t from-copper-100 to-copper-200">
            <PiChampagneThin className={"text-copper-600 text-9xl"} />
          </div>
          <div className="mt-4 space-y-6 text-center">
            <div>
              <h1 className='text-4xl text-center inspiration md:text-6xl lg:text-8xl xl:text-9xl text-copper-600'>El jardín</h1>
              <div className="w-4/5 h-2 mx-auto border-b border-copper-800"></div>
            </div>
            <h3 className='mx-auto text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-copper-600'>20:00 Hrs.</h3>

            <div className="flex items-center justify-center py-4">
              <div className="w-auto p-1 rounded bg-copper-100">
                <PiWarehouseThin className='text-5xl text-copper-300' />
              </div>
              <h2 className='w-full px-2 text-xs font-thin leading-relaxed text-left md:text-xl lg:text-2xl xl:text-4xl text-copper-500'>
                Jardin Ogun Afereyo
              </h2>
            </div>
            <div>
              <h1 className='text-4xl text-center inspiration md:text-6xl lg:text-8xl xl:text-9xl text-copper-600'>La recepción</h1>
            </div>
            <h3 className='mx-auto text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-copper-600'>19:30 Hrs</h3>
            <div className="flex items-center justify-center py-4">
              <div className="w-auto p-1 rounded bg-copper-100">
                <PiMapPinLineThin className='text-5xl text-copper-300' />
              </div>
              <h2 className='px-2 text-xs font-thin leading-relaxed text-left md:text-xl lg:text-2xl xl:text-4xl text-copper-500'>
                Av. 523 #14 Primera Sección de San Juan de Aragón.
              </h2>
            </div>
            <span className='text-xs text-copper-600'>Nota: No se cuenta con estacionamiento, favor de no obstruir entradas.</span>
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
          <Modal isOpen={isModalOpen} onClose={closeModal} url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0600504984454!2d-99.09590312397373!3d19.45297758183083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fbe42a39fcc7%3A0x4d33f0adc5d49779!2sAv.%20523%2014%2C%20San%20Juan%20de%20Arag%C3%B3n%20I%20Secc%2C%20Gustavo%20A.%20Madero%2C%2007969%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691119062494!5m2!1ses-419!2smx' title='¿Cómo llegar ?' description='Av. 523 #14 San Juan de Aragón .'
          />
        </div>
      </div>
    </div>
  );
}

export default Section5;
