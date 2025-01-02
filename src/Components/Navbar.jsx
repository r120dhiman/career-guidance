import React from 'react'
import logo from '/logo.webp'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row justify-between px-20 bg-[#2c3a43] sticky top-0 z-20 shadow-md'>
      <div className="logo h-20 w-20">
        <a href="/">
          <img src={logo} alt="Logo" className='h-20 w-20'/>
        </a> 
      </div>
      <div className="btns flex flex-row gap-5 items-center">
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
    </div>
  )
}

export default Navbar
