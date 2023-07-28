import { useState, useEffect } from 'react';
import { PiEnvelopeSimpleThin, PiEnvelopeSimpleOpenThin } from 'react-icons/pi';
import PropTypes from 'prop-types';
import './Envelope.css'
import ZoomEffect from '../ZoomEffect/ZoomEffect';
import FloatingButton from '../FloatingButton/FloatingButton';

const Envelope = ({ setShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (percentage < 100) {
        setPercentage(prevPercentage => prevPercentage + 1);
      } else {
        setIsOpen(true);
        clearInterval(timer);
        setInterval(() => {
          setIsShow(true);

        }, 900);
      }
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    // <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tr to-copper-400 from-copper-600" id='inicio'></div>
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-brown-300" id='inicio'>
      <div className="absolute z-10 w-2/3 mx-auto space-y-16 ">
        <div className="flex items-center justify-center text-6xl md:text-8xl lg:text-9xl text-copper-800">
          <div className="transition duration-500">
            {isOpen ? <PiEnvelopeSimpleOpenThin /> : <PiEnvelopeSimpleThin />}
          </div>
        </div>
        <div className='space-y-4'>

          <div className="w-full h-2 bg-slate-400 rounded-xl">
            <div className="h-2 progress-bar bg-brown-400 rounded-xl" style={{ width: `${percentage}%` }}>

            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className='text-xl font-semibold text-center text-copper-900'>{percentage}%</span>
          </div>
        </div>
      </div>
      {isShow && <ZoomEffect setIsButton={setIsButton} isButton={isButton} setShow={setShow} />}
      {isButton && <FloatingButton setShow={setShow} isShow/>}
    </div>
  );
};

Envelope.propTypes = {
  setShow: PropTypes.func,

}
export default Envelope;
