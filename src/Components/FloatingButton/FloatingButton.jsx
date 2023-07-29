import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FloatingButton = ({ setShow }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 50000 milisegundos = 50 segundos

    return () => clearTimeout(timer);
  }, []);
  
  const HandleClick = () => {
    setShow(true);
    const section = document.getElementById('hero');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center">

      <button
        className={`${isVisible ? 'fixed md:bottom-36  bottom-24 sm:bottom-12 opacity-100' : 'fixed -bottom-16 opacity-0'
          } transition-all duration-1000 ease-in-out bg-copper text-copper-800 py-2 px-8 rounded-full z-40 border opacity-75 border-copper-400 hover:bg-copper-800 bg-brown-400 hover:text-copper-100 text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`} onClick={HandleClick}
      >
        Quiero enterarme de todo el chisme
      </button>
    </div>
  );
};

FloatingButton.propTypes = {
  setShow: PropTypes.func,

}
export default FloatingButton;
