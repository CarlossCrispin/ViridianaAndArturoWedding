
import ScrollIndicator from '../Components/ScrollIndicator/ScrollIndicator';

const Section1 = () => {

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-fixed bg-center bg-cover bg-full" style={{ backgroundImage: "url('https://images.pexels.com/photos/1727415/pexels-photo-1727415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }} id="section-1">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute flex flex-col items-center space-y-12 md:space-y-24 text-copper-300">
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
    </div>
  );
};

export default Section1;
