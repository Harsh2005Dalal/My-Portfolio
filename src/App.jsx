import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <section id="home">
        <Hero/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="experiences">
        <Experiences/> 
      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

      <section id="footer">
        <Footer/>
      </section>
    </div>
  )
}

export default App
