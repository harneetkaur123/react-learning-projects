import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
       <nav className='w-full py-2 px-3 bg-white sticky shadow-lg z-15 mt-5'>
        <div className="flex items-center justify-around w-full">
          
          <Link to='/' className='flext items-center '>
            <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="logo"
                className="h-10 mr-3 lg:h-12 cursor-pointer" />
          </Link>
         
         <div className='flex flex-wrap lg:order-2 justify-evenly items-center '>

          <Link to='#' className='bg-transparent text-gray-700 px-2 py-1 lg:py2 lg:px-3 rounded focus:outline-gray-200 cursor-pointer'>
                 Log In
          </Link>
          <Link to='#' className='bg-orange-400 text-white px-2 py-1 lg:py2 lg:px-3 rounded cursor-pointer hover:bg-orange-300'>
                 Sign In
          </Link>
         </div>

         <div className='flex-col items-center justify-center lg:flex-row '>
          
          <NavLink to="" className={({isActive})=>`p-3 hover:text-orange-400 ${isActive?" text-orange-400" :"text-black"} lg:text-xl cursor-pointer`}>
            Home
          </NavLink>

          <NavLink to="about" className={({isActive})=>`p-3 hover:text-orange-400 ${isActive?" text-orange-400" :"text-black"} lg:text-xl cursor-pointer`}>
            About
          </NavLink>
          <NavLink to="contact" className={({isActive})=>`p-3 hover:text-orange-400 ${isActive?" text-orange-400" :"text-black"} lg:text-xl cursor-pointer`}>
            Contact
          </NavLink>

          <NavLink to="git" className={({isActive})=>`p-3 hover:text-orange-400 ${isActive?" text-orange-400" :"text-black"} lg:text-xl cursor-pointer`}>
            GitHub
          </NavLink>

         </div>
        </div>
       </nav>
    </>
  )
}

export default Header;