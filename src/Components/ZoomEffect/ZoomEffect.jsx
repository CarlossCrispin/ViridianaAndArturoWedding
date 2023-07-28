import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ZoomEffect.css'
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect';

const ZoomEffect = ({ setIsButton}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsZoomed(true);
    }, 300);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`transform transition duration-500 ${isZoomed ? 'scale-125' : 'scale-75'} transition-transform absolute z-30 `}>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-3/5 p-8 rounded-md shadow-xl bg-slate-100 h-3/5">
          <TypewriterEffect
            setIsButton={setIsButton} 
            texts={[
              "Como en el fútbol;",
              "Después de nuestro 1er tiempo, hace 11 años, cuando supimos que el amor es verdadero, quisimos ir por todo en el 2do tiempo, y después de 4 años …",
              "Decidimos!",
              "Ser más felices y",
              "Queremos contarte que …",
              "¡Nos casamos!"
            ]}
            typingSpeed={100}
          />
        </div>
      </div>
    </div>
  );
};

ZoomEffect.propTypes = {
  setIsButton: PropTypes.func, 
  setShow: PropTypes.func,
  isButton: PropTypes.bool
}
export default ZoomEffect;
