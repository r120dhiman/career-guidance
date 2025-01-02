import React, { useState } from 'react'
import logo from '/logo.webp'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <div className='flex flex-row justify-between px-4 sm:px-20 bg-[#2c3a43] sticky top-0 z-20 shadow-md'>
      {/* Logo */}
      <div className="logo h-20 w-20">
        <a href="/">
          <img src={logo} alt="Logo" className='h-20 w-20'/>
        </a> 
      </div>

      {/* Hamburger Icon (Visible on small screens) */}
      <div 
        className="lg:hidden flex items-center" 
        onClick={toggleMenu}
      >
        <button className="text-white focus:outline-none relative w-8 h-8">
          <div 
            className={`w-6 h-1 bg-white transition-all duration-300 absolute transform ${isMenuOpen ? 'rotate-45 top-3' : 'top-0'}`}
          ></div>
          <div 
            className={`w-6 h-1 bg-white transition-all duration-300 absolute transform ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></div>
          <div 
            className={`w-6 h-1 bg-white transition-all duration-300 absolute transform ${isMenuOpen ? '-rotate-45 top-3' : 'top-6'}`}
          ></div>
        </button>
      </div>

      {/* Navigation Links (Visible on large screens only) */}
      <div className="hidden lg:flex flex-row gap-5 items-center space-x-4">
        <NavLink 
          to="/career-guidance" 
          className="text-white hover:text-[#FF8C00] transition duration-300"
        >
          Career Guidance
        </NavLink>
        <NavLink 
          to="/about" 
          className="text-white hover:text-[#FF8C00] transition duration-300"
        >
          About
        </NavLink>
        <NavLink 
          to="/contactus" 
          className="text-white hover:text-[#FF8C00] transition duration-300"
        >
          Contact Us
        </NavLink>
        <NavLink 
          to="/placement" 
          className="text-white hover:text-[#FF8C00] transition duration-300"
        >
          Placement
        </NavLink>
      </div>

      {/* Mobile menu (Visible on small screens when toggled) */}
      <div className={`lg:hidden w-full bg-[#2c3a43] ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 py-4`}>
        <NavLink 
          to="/career-guidance" 
          className="block text-white hover:text-[#FF8C00] transition duration-300 py-2 text-center"
          onClick={toggleMenu}
        >
          Career Guidance
        </NavLink>
        <NavLink 
          to="/about" 
          className="block text-white hover:text-[#FF8C00] transition duration-300 py-2 text-center"
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <NavLink 
          to="/contactus" 
          className="block text-white hover:text-[#FF8C00] transition duration-300 py-2 text-center"
          onClick={toggleMenu}
        >
          Contact Us
        </NavLink>
        <NavLink 
          to="/placement" 
          className="block text-white hover:text-[#FF8C00] transition duration-300 py-2 text-center"
          onClick={toggleMenu}
        >
          Placement
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
