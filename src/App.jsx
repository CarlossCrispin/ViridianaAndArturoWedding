
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { useState } from 'react'
import './App.css'
import Envelope from './Components/Envelope/Envelope'
import TailwindTest from './Components/TailwindTest/TailwindTest'
import Hero from './Pages/Hero'
import Navigation from './Components/Navigation/Navigation'
import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'
import Section3 from './Pages/Section3'
import ScrollButton from './Components/ScrollButton/ScrollButton'
import Section4 from './Pages/Section4'
import Section5 from './Pages/Section5'
import Section6 from './Pages/Section6'


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-fit bg-copper-100">
      {show ? <>
        <Section1 />
        <Navigation setShow={setShow} />
        <ScrollButton />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
       
       
      </> : <>
        <Envelope setShow={setShow} />
      </>}

    </div>
  )
}
TailwindTest
export default App
