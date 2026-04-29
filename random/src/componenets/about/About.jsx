import React from 'react'

function About() {
  return (
     <div className="py-4 sm:py-8 px-6 sm:px-15">
                <div className="flex  flex-row justify-center  items-center sm:items-start flex-wrap sm:justify-between">
                   <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg" alt="Meeting" className=" w-full sm:w-1/2" />
                   <div className="w-full sm:w-1/2 px-4 lg:px-7">
                       <h2 className=" text-2xl sm:text-4xl text-black font-medium">
                         React Development is <br />carried out by passionate <br /> Developers
                       </h2>
                       <p className="py-6 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates hic vero asperiores perferendis, eveniet perspiciatis quibusdam repudiandae corporis beatae delectus, recusandae nemo. Ratione, sint est? Earum, temporibus sunt nisi blanditiis eius eos sed accusamus!</p>
                      <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita maxime voluptatum, iusto, adipisci tempora eligendi vitae, inventore quia est nihil animi ut voluptates possimus.</p>
                   </div>
                </div>

             </div>
  )
}

export default About