import Counter from "../Components/Counter/Counter";


const Hero = () => {
  return (
    <div className="relative">
      <div
        className="relative flex items-center justify-center w-screen min-h-screen overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1727415/pexels-photo-1727415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        id="hero"
      >
        <div className="absolute w-full h-full bg-opacity-75 bg-copper-200" />
        {/* Texto */}
        <div className="absolute z-20 flex items-center justify-center w-full bg-copper-600 md:h-1/3 h-1/5">
          <p className='text-2xl font-thin leading-loose tracking-wide lg:text-6xl md:text-4xl inspiration text-copper-100 top-12 '>Un amor, un corazón, un destino</p>
          {/* Div con texto counter */}
          <div className="absolute bottom-0 z-30 flex items-center justify-center translate-y-12">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
