import {useState} from "react"
import {Link,NavLink} from 'react-router-dom'

function Header(){
    return (
        <header className="w-full bg-white sticky py-2 shadow-lg z-15">
            <nav className="flex  items-center flex-wrap py-3 px-5 mx-auto">
              <div className="flex items-center justify-around w-full">
                <Link to="/" className="flex items-center">
              
                 <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  alt="logo"
                  className="h-10 mr-3 lg:h-12"
                  />
                </Link>
            
                <div className="flex items-center lg:order-2 flex-wrap justify-center">
                  <Link
                    to="#"
                    className="text-gray-900 py-2 px-3 lg:px-5 lg:py-2.5 focus:ring-1 focus:ring-gray-300 bg-white rounded-2xl hover:bg-gray-50"
                        >
                            Log in
                    </Link>
                    <Link  to="#"
                     className="bg-orange-500 text-white px-3 lg:px-5 py-2 lg:py-2.5 rounded-xl ml-2 hover:bg-orange-500/95"
                    >
                       Get Started
                    </Link>
                </div>
                <div className="flex items-center">
                      <ul className="list-none flex justify-evenly  items-center flex-col lg:flex-row lg:space-x-8">
                          <li >
                            <NavLink to=""
                               className={({isActive})=>`p-3 duration-200 hover:bg-gray-100 rounded-2xl lg:hover:bg-transparent hover:text-orange-600/80 lg:text-xl ${isActive?"text-orange-600":"text-black"}`}
                            >
                                  Home
                            </NavLink>
                          </li>
                           <li>
                            <NavLink to="/About"
                             className={({isActive})=>`p-3 duration-200 hover:bg-gray-100 rounded-2xl lg:hover:bg-transparent hover:text-orange-600 lg:text-xl ${isActive?"text-orange-600":"text-black"}`}>
                                  About
                            </NavLink>
                          </li> 
                          <li>
                            <NavLink to="/Contact"
                              className={({isActive})=>`p-3 duration-200 hover:bg-gray-100 rounded-2xl lg:hover:bg-transparent hover:text-orange-600 lg:text-xl ${isActive?"text-orange-600":"text-black"}`}
                            >
                                  Contact
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/github"
                              className={({isActive})=>`p-3 duration-200 hover:bg-gray-100 rounded-2xl lg:hover:bg-transparent hover:text-orange-600 lg:text-xl ${isActive?"text-orange-600":"text-black"}`}
                            >
                                  GitHub
                            </NavLink>
                          </li>
                      </ul>
                </div>
             </div>     
            </nav>
        </header>

    );
}

export default Header;