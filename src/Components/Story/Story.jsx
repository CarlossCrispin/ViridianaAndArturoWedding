

export default function Story() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-4 bg-white rounded-md shadow-md sm:w-3/4 md:w-1/2 lg:w-1/3">
        {/* Contenido del div */}
        <div className="flex items-center justify-center w-full h-screen mt-16 bg-red-500">
          <div className="relative flex justify-center">
            <div className="absolute flex flex-col items-center justify-center h-full">
              {/* <div className="w-4 h-4 rounded-full bg-copper-400"></div> */}
              <div className="w-1.5 bg-copper-600 h-full rounded-full translate-y-12"></div>
              {/* <div className="w-4 h-4 rounded-full bg-copper-400"></div> */}
            </div>
            <div className="grid w-full grid-cols-2 gap-4 px-2 md:px-6 grid-rows-8">
              <div className="flex items-center col-start-1 row-start-1">
                <div className="flex flex-col items-center justify-center w-2/3 h-full overflow-hidden">
                  <div className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out transform rounded-lg cursor-pointer hover:scale-110">
                    <img
                      src="./img/VirArt6.jpeg"
                      alt="Imagen"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    <div className="absolute inset-x-0 bottom-0 transition-transform duration-700 ease-in-out transform opacity-75">
                      <p className="p-2 text-xs font-bold text-center text-white bg-black md:text-md ">Texto</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3">
                  <div className="flex items-center justify-center w-full">
                    <div className="w-full h-0.5 bg-copper-600"></div>
                    <div className="w-2 h-2 rounded-full bg-copper-600"></div>
                  </div>
                  <p className="text-xs text-white">2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
