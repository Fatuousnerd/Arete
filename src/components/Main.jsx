import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marq from './Marq'
import About from './About'
import Work from './Work'
import Footer from './Footer'
import Contact from './Contact'
import Services from './Services'
import Portfolio from './Portfolio'
import ScrollToSection from '../ScrollToSection'

const Main = () => {
  return (
    <>
      <ScrollToSection />
      <Navbar />
      <Hero />
      <Marq />
      <Services />
      <Marq />
      <Portfolio />
      <Marq />
      <Work />
      <About />
      <Marq />
      <Contact />
      <Footer />
    </>
  )
}

export default Main