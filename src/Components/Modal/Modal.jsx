// Modal.js
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, onClose, url, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full modal-overlay">
      <div className="absolute inset-0 bg-gray-800 opacity-50 modal-background"></div>
      <div className="relative w-4/5 p-8 bg-white rounded-lg h-4/5 modal-container">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        <p className="mb-4 text-sm"> {description} </p>
        <div className="h-4/6 aspect-w-16">
          <iframe
            src={url}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Mapa"
          ></iframe>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="fixed w-3/5 px-4 py-2 mx-auto mt-6 border rounded-full md:w-1/5 hover:text-white bg-copper-100 text-copper-600 border-copper-300 hover:bg-copper-700 bottom-24"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Modal;
