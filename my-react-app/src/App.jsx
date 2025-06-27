import { useState } from 'react'
import Hero from './sections/hero'
import WhyChooseUs from './sections/WhyChooseUs'
import Curriculum from './sections/Curriculum'
import AboutUs from './sections/AboutUs'
import Contact from './sections/Contact'
import Navbar from './sections/Navbar'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <WhyChooseUs/>
    <Curriculum/>
    <AboutUs/>
    <Contact/>
      
    </>
  )
}

export default App
