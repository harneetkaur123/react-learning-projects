import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [numberAllowed, setNumber] = useState(false)
  const [characterAllowed,setCharacter]=useState(false)
  const [passLength,setPasslength]=useState(8)
  const [password,setPassword]=useState("")
    const passref=useRef(null)

  const PasswordGenerator= useCallback(()=>{
     
          let pass="";
          let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

          if(numberAllowed) str+="0123456789"
          if(characterAllowed) str+="!-+=_&`[]{}~$%#@^*"
 
          for (let i = 1; i <= passLength; i++) {
            let char = Math.floor(Math.random()* str.length +1)

            pass += str.charAt(char)
            
          }
           setPassword(pass)
          
  },[numberAllowed,characterAllowed,passLength,setPassword])

    
    const copypass = useCallback(()=>{
        passref.current?.select()
        passref.current.setSelectionRange(0,5)
        window.navigator.clipboard.writeText(password)
    },[password])

   useEffect(()=>{
          PasswordGenerator()
   },[passLength,characterAllowed,numberAllowed,PasswordGenerator])

  return (
    <>
      <div className="w-full bg-gray-700 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3">
      
        <h1 className='text-center text-white my-3 text-xl'>Password Generator</h1>
         <div className='flex mb-4 overflow-hidden rounded-lg shadow-md'>
                <input type="text"
                value={password}
                 className='outline-none w-full py-2 px-3 bg-white text-xl' 
                 placeholder='password'
                 readOnly 
                 ref={passref}
                 />

                 <button 
                 onClick={copypass}
                 className='bg-blue-500 text-white px-3 py-1 cursor-pointer active:scale-95 active:bg-blue-300'
                 >Copy</button>
         </div>
         <div className='flex gap-x-2 text-orange-400'>

             <div className='flex gap-x-1 items-center'>
                <input type="range"
                min={8}
                max={30}
                value={passLength}
                className='cursor-pointer'
                onChange={(e)=> setPasslength(e.target.value)}
              />
              <label >length ({passLength})</label>
              </div>

          <div className="flex gap-x-1 items-center">
              <input type="checkbox"
              defaultChecked={numberAllowed} 
              id="numberInput"
              onChange={()=>{
                 setNumber((prev)=>!prev)
              }}
              />
           <label htmlFor='numberInput'>Number</label>

          </div>

              <div className="flex gap-x-1 items-center">
              <input type="checkbox"
              defaultChecked={characterAllowed} 
              id="charInput"
              onChange={()=>{
                 setCharacter((prev)=>!prev)
              }}
              />
           <label htmlFor='charInput'>characters</label>

          </div>
         </div>
        </div>
    </>
  )
}

export default App
