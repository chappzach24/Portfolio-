import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-[#0f1729]/80 backdrop-blur-sm">
      <div className="text-white"></div>
      <div className="flex gap-4">
        <button className="bg-[#00bfbf] px-4 py-2 rounded-md text-white">
          Resume
        </button>
        <button className="bg-[#00bfbf] px-4 py-2 rounded-md text-white">
          Contact Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar