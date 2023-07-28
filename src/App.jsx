
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { useState } from 'react'
import './App.css'
import Envelope from './Components/Envelope/Envelope'
import Navbar from './Components/Navbar/Navbar'
import TailwindTest from './Components/TailwindTest/TailwindTest'
import Hero from './Pages/Hero'
import Navigation from './Components/Navigation/Navigation'
import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-screen">
      {/* <Section2 /> */}
      {/* <TailwindTest /> */}
      {/* <Navigation />
      <Navbar setShow={setShow} />
      <Section1 />
      <section id="section-2" className="h-screen border border-sky-200 bg-copper-200">historia</section>
      <section id="section-3" className="h-screen border border-sky-300 bg-copper-300">misa</section>
      <section id="section-4" className="h-screen border border-sky-400 bg-brown-400">vestimenta</section>
      <section id="section-4" className="h-screen border border-sky-400 bg-brown-500">salon</section>
    <section id="section-4" className="h-screen border border-sky-400 bg-brown-600">confirma</section> */}
      {show ? <>
        <Section1 />
        <Navigation setShow={setShow} />
        <Section2 />
        <section id="section-2" className="flex items-center justify-center h-screen border border-sky-200 bg-copper-800">
          <div className="h-screnn right-5 top-4">
            <div>
              <div className="flex items-center justify-center w-24 h-24 text-5xl text-white rounded-full">01</div>
              <div className="relative h-16 translate-x-8 translate-y-6 w-36">
                <div className="absolute top-0 left-0 w-full origin-top-left transform -rotate-45 bg-white border border-t-1"></div>
              </div>
            </div>
          </div>
          historia
        </section>
        <section id="section-3" className="flex items-center justify-center h-screen border border-sky-300 bg-copper-300">
          <div className="h-screnn right-5 top-4"><div className="h-screnn right-5 top-4">
            <div>
              <div className="flex items-center justify-center w-24 h-24 text-5xl text-white border rounded-full">03</div>
              {/* <div className="relative h-16 translate-x-8 translate-y-6 w-36">
              <div className="absolute top-0 left-0 w-full origin-top-left transform -rotate-45 bg-white border border-t-1"></div>
            </div> */}
            </div>
          </div>
          </div>misa
        </section>
        <section id="section-4" className="flex items-center justify-center h-screen border border-sky-400 bg-brown-400"> <div className="h-screnn right-5 top-4"><div className="h-screnn right-5 top-4">
          <div>
            <div className="flex items-center justify-center w-24 h-24 text-5xl text-white rounded-full">04</div>
            <div className="relative h-16 translate-x-8 translate-y-6 w-36">
              <div className="absolute top-0 left-0 w-full origin-top-left transform -rotate-45 bg-white border border-t-1"></div>
            </div>
          </div>
        </div></div>vestimenta</section>
        <section id="section-5" className="flex items-center justify-center h-screen border border-sky-400 bg-brown-500"> <div className="h-screnn right-5 top-4">

        </div><div className="h-screnn right-5 top-4"><div className="h-screnn right-5 top-4">
          <div>
            <div className="flex items-center justify-center w-24 h-24 text-5xl text-white border rounded-full">05</div>
            {/* <div className="relative h-16 translate-x-8 translate-y-6 w-36">
              <div className="absolute top-0 left-0 w-full origin-top-left transform -rotate-45 bg-white border border-t-1"></div>
            </div> */}
          </div>
        </div>
          </div>salon</section>
        <section id="section-6" className="flex items-center justify-center h-screen border border-sky-400 bg-brown-600"> <div className="h-screnn right-5 top-4"><div className="h-screnn right-5 top-4">
          <div>
            <div className="flex items-center justify-center w-24 h-24 text-5xl text-white rounded-full">06</div>
            <div className="relative h-16 translate-x-8 translate-y-6 w-36">
              <div className="absolute top-0 left-0 w-full origin-top-left transform -rotate-45 bg-white border border-t-1"></div>
            </div>
          </div>
        </div></div>confirma</section>
      </> : <>
        <Envelope setShow={setShow} />
      </>}

    </div>
  )
}
TailwindTest
export default App
