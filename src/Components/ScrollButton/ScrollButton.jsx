import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

const ScrollButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById('section-2');
      const rect = section2.getBoundingClientRect();
      const isVisible = rect.top <= 0; // Verifica si la sección llega al tope o está arriba de la ventana

      setIsButtonVisible(isVisible);
    };

    // Agrega un evento de escucha para el desplazamiento (scroll) de la página
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remueve el evento de escucha al desmontar el componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isButtonVisible ? 'visible' : 'invisible'}`}>
      <div
        className={`rounded-full border-white border p-2 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={scrollToTimeline}
      >
        <HiOutlineArrowNarrowUp className="text-white" size={20} />
      </div>
    </div>
  );
};

export default ScrollButton;