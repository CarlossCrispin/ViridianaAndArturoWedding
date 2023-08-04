import { useState } from 'react';

const ImageSlider = () => {
  const images = ['./img/VirArt1.jpeg', './img/VirArt2.jpeg', './img/VirArt3.jpeg']; // Agregar aquí las rutas de tus imágenes

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full border-2 rounded ring-2 ring-pink-500 ring-inset " />

      <button
        onClick={prevSlide}
        className="absolute left-0 w-12 h-12 p-2 transform -translate-y-1/2 bg-opacity-50 rounded-full bg-copper-200 top-1/2 text-copper-600"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 w-12 h-12 p-2 transform -translate-y-1/2 bg-opacity-50 rounded-full bg-copper-200 top-1/2 text-copper-600"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
