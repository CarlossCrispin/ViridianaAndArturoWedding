import { useEffect, useState } from 'react';

export default function Counter() {
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
    <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'flex  opacity-100' : 'fixed -top-16 opacity-0 '
      }`}>
      <div className="p-4 m-2 text-center bg-white rounded-md shadow-xl h-18 md:h-24 w-245 md:w-36 text-copper-800">
        <div className="font-bold text-md lg:text-4xl md:text-2xl">{days}</div>
        <div className="text-xs font-bold lg:text-2xl md:text-xl">Días</div>
      </div>
      <div className="p-4 m-2 text-center bg-white rounded-md shadow-xl h-18 md:h-24 w-245 md:w-36 text-copper-800">
        <div className="font-bold text-md lg:text-4xl md:text-2xl">{hours}</div>
        <div className="text-xs font-bold lg:text-2xl md:text-xl">Horas</div>
      </div>
      <div className="p-4 m-2 text-center bg-white rounded-md shadow-xl h-18 md:h-24 w-245 md:w-36 text-copper-800">
        <div className="font-bold text-md lg:text-4xl md:text-2xl">{minutes}</div>
        <div className="text-xs font-bold lg:text-2xl md:text-xl">Minutos</div>
      </div>
      <div className="p-4 m-2 text-center bg-white rounded-md shadow-xl h-18 md:h-24 w-245 md:w-36 text-copper-800">
        <div className="font-bold text-md lg:text-4xl md:text-2xl">{seconds}</div>
        <div className="text-xs font-bold lg:text-2xl md:text-xl">Segundos</div>
      </div>
    </div>
  )
}
