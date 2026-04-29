import React from "react";
import {Link,NavLink} from "react-router-dom"

function Home(){

    return (
       <div className="w-full max-w-5xl mx-auto">
           <aside className=" relative py-5 sm:py-8 mt-13 flex justify-center lg:justify-between flex-wrap">
              <div >
                 <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg" alt="laptop" 
                  className="w-xl"
                 />
              </div>

              <div className="flex flex-col gap-y-8 mt-6 sm:mt-15 lg:items-end items-center">
             <h2 className="text-4xl font-medium sm:text-5xl">Download Now
                <span className="hidden lg:block text-3xl font-medium text-right">Lorem, ipsum.</span>
             </h2>
               <Link className="bg-orange-500 text-white font-medium hover:bg-amber-600/95 text-xl cursor-pointer rounded-2xl py-3 px-5 sm:px-7 flex justify-center items-center ">
                    <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-4"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                  Download Now
               </Link>
              </div>

           </aside>
           <div className="flex flex-col  gap-y-5 max-w-5xl mx-auto">
              <div className=" w-full flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg" alt="laptop" 
                    className="w-2xl"
                   />
              </div>
              <h2 className="text-4xl font-medium mb-5">
                Lorem, ipsum dolor.
                </h2>
           </div>
       </div>
    );
}

export default Home;