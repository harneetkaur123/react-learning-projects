import React from 'react'

function TailwindCard({name , link}) {
  return (
    <>
      <div className='max-w-xs bg-white text-black rounded-2xl mb-2 mx-2'>
        <img 
         src="https://picsum.photos/301"
         alt=""
         className='object-cover object-center w-full rounded-t-2xl h-70'
          />
         <div className='flex flex-col items-center p-2'>
             <h1 className='text-3xl  font-bold '>{name}</h1>
             <p className='text-center mt-1.5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt id asperiores beatae dolor nostrum aspernatur suscipit aperiam modi hic?
              </p>
              <button 
              className='mt-2.5 mb-1 bg-gray-900 rounded-2xl text-white text-lg  py-2 px-4 w-[45%] shadow-2xl active:scale-95 cursor-pointer'
              >{link}</button>
        </div>  
      </div>
    </>
  )
}

export default TailwindCard