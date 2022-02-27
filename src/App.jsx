import React from 'react'
import Header from './components/header/Header'
import Nav from './components/navigation/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Service'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App