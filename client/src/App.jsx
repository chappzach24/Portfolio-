import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="w-full h-screen bg-[#0f1729]">
      <Navbar />
      <div className="w-full h-screen overflow-y-auto scroll-smooth">
        <section className="w-full min-h-screen">
          <Hero />
        </section>
        <section className="bg-[#0f1729] w-full min-h-screen">
          <About />
        </section>
        <section className="w-full min-h-screen">
          <Projects />
        </section>
        <section className="w-full min-h-screen">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App