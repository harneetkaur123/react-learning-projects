import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-white border-t-2 border-gray-200/40'>
        <div className='py-4 lg:py-5 md:flex md:flex-wrap w-full justify-around border-b-2 border-gray-200/40'>
           <div className=" flex justify-center items-center ">
             <Link to="/" className="flex items-center">
              
                 <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  alt="logo"
                  className="h-16"
                  />
                </Link>
          </div>
           <div className='flex flex-wrap justify-evenly gap-9  items-center'>
             <div className='flex flex-col justify-center mb-3 lg:mb-0'>
                  <h2 className='font-medium mb-2 uppercase'>Resources</h2>
                  <ul className='list-none'>
                   <li>
                       <Link  to="/"
                       className="hover:underline"
                      >Home</Link>
                   </li>
                    <li>
                       <Link  to="/"
                       className="hover:underline"
                      >About</Link>
                   </li>
                  </ul>

             </div>
              <div className='flex flex-col justify-center mb-3 lg:mb-0'>
                  <h2 className='font-medium mb-2 uppercase'>Follow us</h2>
                  <ul className='list-none'>
                   <li>
                       <Link  to="/"
                       className="hover:underline"
                      >GitHub</Link>
                   </li>
                    <li>
                       <Link  to="/"
                       className="hover:underline"
                      >Discord</Link>
                   </li>
                  </ul>

             </div>
              <div className='flex flex-col justify-center mb-3 lg:mb-0'>
                  <h2 className='font-medium mb-2 uppercase'>Legal</h2>
                  <ul className='list-none'>
                   <li>
                       <Link  to="/"
                       className="hover:underline"
                      >Privacy Policy</Link>
                   </li>
                    <li>
                       <Link  to="/"
                       className="hover:underline"
                      >legal &amp; Conditions</Link>
                   </li>
                  </ul>

             </div>
           </div>
        </div>

    </footer>
  )
}

export default Footer;