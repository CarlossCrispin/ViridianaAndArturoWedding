import  { useState } from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';
import { BsArrowUp} from 'react-icons/bs';
import Tooltip from '../Tooltip/Tooltip';
import { Timeline } from '../Timeline';

// Componente Tooltip

const sections = [
  { id: 'section-1', name: 'Cuando' },
  { id: 'section-2', name: 'Historia' },
  { id: 'section-3', name: 'Misa' },
  { id: 'section-4', name: 'Dresscode' },
  { id: 'section-5', name: 'party' },
  { id: 'section-6', name: 'confirm' },
  // Agrega aquí más secciones según necesites
];

const Navigation = ({ setShow }) => {
  const [activeLink, setActiveLink] = useState(null);
  
  const HandleClick = () => {
    setShow(false);

  };
  return (
    <div className="flex items-center justify-center" >
      {/* Circulo azul si es pantalla mayor a md */}
      <div className="fixed top-0 left-0 z-50 hidden md:flex">
        <div className="flex flex-col items-center justify-center h-screen">
          <a
            className={`text-white flex items-center justify-center mb-4`}
            onClick={HandleClick}
          >
            <Tooltip content="Inicio">
              <BsArrowUp className="" size={36} />
              {/* Opcional: puedes agregar algún ícono o contenido aquí dentro del Tooltip */}

            </Tooltip>
          </a>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative w-8 h-8 border rounded-full ${activeLink === section.id ? 'bg-black text-white' : 'border-white'
                } hover:bg-slate-400 active:bg-black active:border-slate-100 transition-colors duration-300 flex items-center justify-center mb-4`}
              onClick={() => setActiveLink(section.id)}
            >
              <Tooltip content={section.name}>
                {/* Opcional: puedes agregar algún ícono o contenido aquí dentro del Tooltip */}
              </Tooltip>
            </a>
          ))}
        </div>
      </div>

      {/* Cuadrado amarillo si es pantalla menor a md */}
      <div className="relative w-full h-screen text-black bg-slate-100 md:hidden">
        <div className="absolute w-full h-full opacity-25 bg-copper-100"></div>
        <div className="p-2 px-6">

          <p className='absolute text-xs'>Contenido</p>
         {/*  <div className="absolute flex flex-col items-center justify-center h-full ">
            {sections.map((section, i) => (
              <div key={section.id} className='mt-4'>
                <p className="text-3xl font-thin">{"0"+(i+1)}</p>
              <div className="flex items-center justify-center w-full">
                  <a key={section.id}
                    href={`#${section.id}`} className="text-2xl font-thin ">{section.name} </a>
                <div className="transform scale-x-[-1] ml-4 trnasform translate-y-2">
                  <BsArrow90DegDown className="" size={24} />
                </div>
              </div>
            </div>
            ))}
            
          </div> */}
          <Timeline />
        </div>







      </div>
    </div>
  );
};

Navigation.propTypes = {
  setShow: PropTypes.func
}
export default Navigation;