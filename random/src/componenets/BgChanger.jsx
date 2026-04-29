import React from 'react'
import { useState } from 'react'

function BgChanger() {
    let [color ,setColor]=useState('black')
  return (
    <div className='w-full h-screen bg-gray-900 flex justify-center items-end ' style={{backgroundColor:color}}>
       
        <nav className=' rounded-2xl bg-white text-white py-2 px-3 flex justify-evenly flex-row items-center mb-6.5'>
              <button className='py-1 px-3.5 shadow active:scale-95 cursor-pointer rounded-2xl flex items-center justify-center h-10 leading-none w-20 mr-2' style={{backgroundColor:"skyblue"}} onClick={()=>setColor('skyblue')}>blue</button>
              <button className='py-1 px-3.5 shadow active:scale-95 cursor-pointer rounded-2xl flex items-center justify-center h-10 leading-none w-20 mr-2' style={{backgroundColor:"pink"}} onClick={()=>setColor('pink')}>pink</button>
              <button className='py-1 px-3.5 shadow active:scale-95 cursor-pointer rounded-2xl flex items-center justify-center h-10 leading-none w-20 mr-2' style={{backgroundColor:"brown"}} onClick={()=>setColor('brown')}>Brown</button>
              <button className='py-1 px-3.5 shadow active:scale-95 cursor-pointer rounded-2xl flex items-center justify-center h-10 leading-none w-20 mr-2' style={{backgroundColor:"violet"}} onClick={()=>setColor('violet')}>violet</button>
              <button className='py-1 px-3.5 shadow active:scale-95 cursor-pointer rounded-2xl flex items-center justify-center h-10 leading-none w-20 mr-2' style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>orange</button>
              <button className='py-1 px-3.5 shadow active:scale-95 cursor-pointer rounded-2xl flex items-center justify-center h-10 leading-none w-20 mr-2' style={{backgroundColor:"olive"}} onClick={()=>setColor('olive')}>olive</button>
        </nav>
    </div>
  )
}

export default BgChanger