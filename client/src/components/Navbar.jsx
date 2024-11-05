import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#92AFD7]/95' : 'bg-transparent'
    } backdrop-blur-sm`}>

      <div className="text-white font-bold text-xl">ZC</div>

      <div className="flex gap-4">
        <a 
          href="Zachary_Chapman-Resume.pdf"
          target="_blank"
          className="px-4 py-2 rounded-full text-[#92AFD7] bg-white hover:bg-white/90 transition-all duration-300 font-medium"
        >
          Resume
        </a>
        <a 
          href="#contact"
          className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 font-medium"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;