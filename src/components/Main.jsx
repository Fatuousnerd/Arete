import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marq from './Marq'
import About from './About'
import Work from './Work'
import Footer from './Footer'
import Contact from './Contact'
import Services from './Services'

const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marq />
      <Services />
      <About />
      <Work />
      <Marq />
      <Contact />
      <Footer />
    </>
  )
}

export default Main