import HeaderSection from "../Components/HeaderSection/HeaderSection";

export default function Section2() {
  return (
    <div className='relative w-screen min-h-screen bg-copper-600' id='section-2'>
      < HeaderSection number={2} text="Nuestra historia" dark={true} />
      <div className="relative flex justify-center py-12">
        <div className="absolute flex flex-col items-center justify-center h-4/5">
          {/* <div className="w-4 h-4 rounded-full bg-copper-400"></div> */}
          <div className="w-1.5 bg-white h-full rounded-full translate-y-12"></div>
          {/* <div className="w-4 h-4 rounded-full bg-copper-400"></div> */}
        </div>
        <div className="grid w-full grid-cols-2 gap-4 px-2 py-12 md:px-6 grid-rows-8">
          {/* Div 1 - Pegado a la derecha */}
          <div className="flex items-center col-start-1 row-start-1">
            <div className="flex flex-col items-center justify-center w-2/3 h-full overflow-hidden">
              <div className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out transform rounded-lg cursor-pointer hover:scale-110">
                <img
                  src="./img/2012.jpeg"
                  alt="Imagen"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 transition-transform duration-700 ease-in-out transform opacity-75">
                  <p className="p-2 text-xs font-bold text-center text-white uppercase bg-black md:text-2xl">&quot; El Flechazo &quot;</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <div className="flex items-center justify-center w-full">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-xs text-white">2012</p>
            </div>
          </div>
          {/* Div 2 - Pegado a la izquierda */}
          <div className="flex items-center col-start-2 row-start-3">
            <div className="flex flex-col items-center justify-center w-1/3">
              <div className="flex items-center justify-center w-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
              <p className="text-xs text-white">2019</p>
            </div>
            <div className="flex flex-col items-center justify-center w-2/3 h-full overflow-hidden">
              <div className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out transform rounded-lg cursor-pointer hover:scale-110">
                <img
                  src="./img/2019.jpg"
                  alt="Imagen"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 transition-transform duration-700 ease-in-out transform opacity-75">
                  <p className="p-2 text-xs font-bold text-center text-white uppercase bg-black md:text-2xl">&quot; El Reencuentro &quot;</p>
                </div>
              </div>
            </div>
            
          </div>
          {/* Div 3 - Pegado a la derecha */}
          <div className="flex items-center col-start-1 row-start-5">
            <div className="flex flex-col items-center justify-center w-2/3 h-full overflow-hidden">
              <div className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out transform rounded-lg cursor-pointer hover:scale-110">
                <img
                  src="./img/2020.jpg"
                  alt="Imagen"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 transition-transform duration-700 ease-in-out transform opacity-75">
                  <p className="p-2 text-xs font-bold text-center text-white uppercase bg-black md:text-2xl">&quot; El Compromiso &quot;</p>
                  
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <div className="flex items-center justify-center w-full">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-xs text-white">2020</p>
            </div>
          </div>
          {/* Div 4 - Pegado a la izquierda */}
          <div className="flex items-center col-start-2 row-start-7">
            <div className="flex flex-col items-center justify-center w-1/3">
              <div className="flex items-center justify-center w-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
              <p className="text-xs text-white">2022</p>
            </div>
            <div className="flex flex-col items-center justify-center w-2/3 h-full overflow-hidden">
              <div className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out transform rounded-lg cursor-pointer hover:scale-110">
                <img
                  src="./img/2022.jpg"
                  alt="Imagen"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 transition-transform duration-700 ease-in-out transform opacity-75">
                  <p className="p-2 text-xs font-bold text-center text-white uppercase bg-black md:text-2xl">&quot; Para toda la Vida &quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
