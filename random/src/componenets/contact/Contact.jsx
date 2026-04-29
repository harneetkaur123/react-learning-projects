import React from 'react'

function Contact() {
  return (
    <div className=" py-6 flex justify-center items-center">
          <div className="  py-5 sm:py-9 flex sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-8 max-w-3xl w-full">
          
          <div className="bg-gray-200 flex flex-col items-center p-7">
             <h2 className=" text-xl font-medium">Get in touch:</h2>
             <p className=" font-semibold text-gray-600 tracking-wide">Fill in the form to start a conversation</p>
             <div className="mt-3  text-gray-600 flex items-center">
                 <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                         <div className="ml-4 text-md tracking-wide font-semibold w-full sm:w-40"> Acme Inc, Street, State, Postal Code</div>       
             </div>
             <div className="mt-3  text-gray-600 flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold  w-full sm:w-40">
                                    +44 1234567890
                                </div> 
             </div>
             <div className="mt-3  text-gray-600 flex items-center">
                               <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold  w-full sm:w-40">
                                    info@acme.org
                                </div>
             </div>

          </div>


              <div className=" flex flex-col items-start justify-center gap-y-5  p-5 w-full sm:w-auto">
                   <input type="text"
                    placeholder="FullName"
                    className="py-3 px-3 font-medium rounded-lg outline-2 outline-gray-300 w-full sm:w-80 "
                   />

                   <input type="text" 
                    placeholder="Email"
                    className="py-3 px-3 font-medium rounded-lg outline-2 outline-gray-300 w-full sm:w-80"
                    />

                   <input type="text"
                    placeholder="Telephone Number"
                    className="py-3 px-3 font-medium rounded-lg outline-2 outline-gray-300 w-full sm:w-80"
                    />


                   <button className="py-3 px-7 text-white font-semibold rounded-lg bg-orange-600">Submit</button>
              </div>
          </div>
          </div>
  )
}

export default Contact;