import { useEffect, useState } from 'react';
import ScrollIndicator from '../Components/ScrollIndicator/ScrollIndicator';

const Section1 = () => {
  const weddingDate = new Date('2023-12-16T00:00:00').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = weddingDate - now;

      if (timeRemaining > 0) {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        clearInterval(countdownInterval);
      }
    }, 600);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400); // 50000 milisegundos = 50 segundos

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-center bg-cover bg-fullscreen" style={{ backgroundImage: "url('https://images.pexels.com/photos/1727415/pexels-photo-1727415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }} id="section-1">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'absolute top-0 flex mt-4 md:mt-16 opacity-100' : 'fixed -top-16 opacity-0 '
        }`}>
        <div className="p-4 m-2 text-center rounded-md h-18 md:h-24 w-245 md:w-36 text-copper-800 bg-brown-300">
          <div className="font-bold text-md lg:text-4xl md:text-2xl">{days}</div>
          <div className="text-xs font-bold lg:text-2xl md:text-xl">Días</div>
        </div>
        <div className="p-4 m-2 text-center rounded-md h-18 md:h-24 w-245 md:w-36 text-copper-800 bg-brown-300">
          <div className="font-bold text-md lg:text-4xl md:text-2xl">{hours}</div>
          <div className="text-xs font-bold lg:text-2xl md:text-xl">Horas</div>
        </div>
        <div className="p-4 m-2 text-center rounded-md h-18 md:h-24 w-245 md:w-36 text-copper-800 bg-brown-300">
          <div className="font-bold text-md lg:text-4xl md:text-2xl">{minutes}</div>
          <div className="text-xs font-bold lg:text-2xl md:text-xl">Minutos</div>
        </div>
        <div className="p-4 m-2 text-center rounded-md h-18 md:h-24 w-245 md:w-36 text-copper-800 bg-brown-300">
          <div className="font-bold text-md lg:text-4xl md:text-2xl">{seconds}</div>
          <div className="text-xs font-bold lg:text-2xl md:text-xl">Segundos</div>
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-center mt-24 space-y-12 tracking-wide md:space-y-24 text-copper-300">
        <div className='space-y-6 text-center'>
          <h1 className="mb-2 text-6xl font-thin lg:text-9xl md:text-8xl inspiration">Viridiana</h1>
          <h1 className="mb-2 text-6xl font-thin lg:text-9xl md:text-8xl inspiration">&</h1>
          <h1 className="mb-2 text-6xl font-thin lg:text-9xl md:text-8xl inspiration">Arturo</h1>
        </div>
        <h2 className="mb-8 text-4xl font-thin lg:text-8xl md:text-6xl inspiration text-copper-400">Nuestra boda</h2>
        <h2 className="px-6 py-2 mt-4 font-bold border-t-2 border-b-2 text-md lg:text-4xl md:text-2xl border-copper-200">16 Diciembre 2023</h2>
      </div>
      <div className='md:hidden'>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Section1;
