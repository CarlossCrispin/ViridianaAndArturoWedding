import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';
import PropTypes from 'prop-types';

const ScrollButton = ({ sectionPar }) => {
  const [isButtonVisible, setIsButtonVisible,] = useState(false);

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
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black border rounded-full opacity-20"></div>
        <div
          className={`rounded-full  ${sectionPar ? 'border-copper-600' : 'border-white'
            } border p-2 cursor-pointer transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0'
            }`}

        >
          <HiOutlineArrowNarrowUp className={`${sectionPar ? "text-copper-600" : "text-white"}`} size={20} />
        </div>
      </div>
    </div>
  );
};

ScrollButton.propTypes = {
  sectionPar: PropTypes.bool
}
export default ScrollButton;
