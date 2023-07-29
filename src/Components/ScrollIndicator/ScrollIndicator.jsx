import { useState, useEffect } from 'react';
import { BsArrowDown } from 'react-icons/bs';

const ScrollIndicator = () => {
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline');
      const rect = timelineSection.getBoundingClientRect();
      const isVisible = rect.bottom > window.innerHeight; // Verifica si el bottom del elemento timeline es mayor que el alto de la ventana

      setIsScrollIndicatorVisible(isVisible);
    };

    // Agrega un evento de escucha para el desplazamiento (scroll) de la página
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remueve el evento de escucha al desmontar el componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed transform -translate-x-1/2 bottom-4 left-1/2 ${isScrollIndicatorVisible ? 'block' : 'hidden'}`}>
      <div className="relative flex items-center justify-center w-6 h-12 overflow-auto border border-white rounded-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <BsArrowDown className="absolute text-white transform -translate-x-1/2 animate-bounce top-1/3" size={24} />
        {/* <BsArrowDown className="absolute text-white transform -translate-x-1/2 animate-bounce top-2/3" size={12} /> */}
      </div>
    </div>
  );
};

export default ScrollIndicator;
