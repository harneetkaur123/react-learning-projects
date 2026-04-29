import React, {  useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator() {

   const [numberAllowed, setNumber]=useState(false)
   const [characterAllowed,setCharacter]=useState(false)
   const [passLength,setPasslength]=useState(8)
   const [password , setPassword]= useState(' ')
   const passref=useRef(null)

   const passwordGenerator= useCallback(()=>{
        let pass=""
        let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
         if(numberAllowed){
            str +='0123456789'
         }    
         if(characterAllowed){
            str+='[]*()~$#@^&_'
         }
         for(let i=0 ; i <=passLength ; i++){
             
            let char = Math.floor(Math.random()*str.length +1 )
             pass += str.charAt(char)
         }
         setPassword(pass)

   },[numberAllowed,characterAllowed,passLength,setPassword])

   const copypass=useCallback(()=>{
         passref.current?.select()
         passref.current.setSelectionRange(0,6)
         window.navigator.clipboard.writeText(password)
   },[password])
     
   

   useEffect(()=>{
        passwordGenerator()
   },[numberAllowed,characterAllowed,passLength,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto bg-gray-700 mt-8 px-5 py-4 text-white flex flex-col items-center rounded-2xl shadow '>
        <h1 className='text-2xl '>Password Generator</h1>
      <div className='flex flex-row w-full justify-center mt-4 '>
          <input type="text" 
          value={password}
          ref={passref}
          className='w-full bg-white text-black  rounded-l-lg outline-none px-4 py-2 text-xl'
          />
          <button
           className='bg-blue-500 text-white text-xl px-3 py-2 rounded-r-lg cursor-pointer active:bg-blue-400'
           onClick={copypass}
           >Copy</button>
      </div>
      <div className='flex flex-row w-full  mt-4 items-center'>
        <input type="range" 
        className='mr-1.5  cursor-pointer' 
        value={passLength}
        min={8}
        max={18}
        onChange={(e)=>setPasslength(e.target.value)}
        />
        <label className='mr-2 '>Length ({passLength})</label>
        <input type="checkbox" 
        value={numberAllowed}
        onChange={()=>{
            setNumber((prev)=> !prev)
        }}
        className='mr-1.5 cursor-pointer'
         
        />
        <label className='mr-2'>Number</label>
        <input type="checkbox" 
        value={characterAllowed}
         className='mr-1.5 cursor-pointer'
          onChange={()=>{
            setCharacter((prev)=> !prev)
        }}
        />
        <label className='mr-2'>Character</label>
      </div>
    </div>
  )
}

export default PasswordGenerator