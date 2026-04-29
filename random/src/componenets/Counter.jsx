import React from 'react'
import { useState } from 'react'

function Counter() {
    let [count , setCount]=useState(0)
  return (
     <div className='flex flex-col justify-center items-center w-full  h-screen'>
       <h1 className='text-5xl text-center text-white font-bold'>Chai aur React</h1>
       <h4 className='mt-5 text-white  text-2xl'>counter value : {count}</h4>
       <div className='mt-6 w-[30%] flex justify-between'>
        <button
         className='bg-black rounded-3xl shadow-2xl text-white p-2 px-3 w-[45%] text-lg cursor-pointer active:scale-95'
         onClick={()=>{count<20?setCount(count+1): setCount(count)}}
        >Add value : {count}
        </button>
        <button 
        className='bg-black rounded-3xl shadow-2xl text-white p-2 px-3 w-[45%] text-lg cursor-pointer active:scale-95'
         onClick={()=>{count>0?setCount(count-1): setCount(count)}}
        >remove value : {count}
        </button>
       </div>
     </div>
  )
}

export default Counter