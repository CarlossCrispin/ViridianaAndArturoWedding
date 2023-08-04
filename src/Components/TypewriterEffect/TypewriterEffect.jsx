import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TypewriterEffect.css'
const TypewriterEffect = ({ texts, typingSpeed, setIsButton }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  useEffect(() => {
    if (currentTextIndex >= texts.length) {
      setIsButton(true)
      return; // No más textos en la cola, salimos
    }

    const currentLine = texts[currentTextIndex];
    const interval = setInterval(() => {
      if (currentCharIndex < currentLine.length) {
        setDisplayText((prevText) => prevText + currentLine[currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);

        // Esperar un tiempo antes de empezar la siguiente línea
        setTimeout(() => {
          setDisplayText((prevText) => prevText + '\n\n'); // Agregar salto de línea
          setCurrentTextIndex((prevIndex) => prevIndex + 1);
          setCurrentCharIndex(0);
        }, typingSpeed);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [texts, typingSpeed, currentTextIndex, currentCharIndex, setIsButton]);

  return (
    <div className="typewriter-container">
      <pre className="text-xs tracking-wide typewriter-text md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">{displayText}</pre>
    </div>
  );
};

TypewriterEffect.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number.isRequired,
  setIsButton: PropTypes.func
};

export default TypewriterEffect;
