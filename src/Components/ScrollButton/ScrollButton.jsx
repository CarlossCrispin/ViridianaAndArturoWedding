import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

const ScrollButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById('section-2');
      if (section2) {
        const rect = section2.getBoundingClientRect();
        const isVisible = rect.top <= 0; // Verifica si la sección llega al tope o está arriba de la ventana

        setIsButtonVisible(isVisible);
      }
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
    /* const Section1 = document.getElementById('section-1');
    Section1.scrollIntoView({ behavior: 'smooth' }); */
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 md:hidden ${isButtonVisible ? 'visible' : 'invisible'}`} onClick={scrollToTimeline}>
      <div
        className={`rounded-full border-copper-600 border p-2 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0'
          }`}
        
      >
        <HiOutlineArrowNarrowUp className="text-copper-600" size={20} />
      </div>
    </div>
  );
};

export default ScrollButton;
