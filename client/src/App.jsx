import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="w-full h-screen bg-[#0f1729] overflow-hidden">
      <Navbar />
      <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
        <section className="w-full h-screen snap-start">
          <Hero />
        </section>
        <section className="w-full h-screen snap-start">
          <About />
        </section>
        <section className="w-full h-screen snap-start">
          <Projects />
        </section>
        <section className="w-full h-screen snap-start">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App