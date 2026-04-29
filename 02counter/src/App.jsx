import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [count,setCount]=useState(10);

   const Addvalue= ()=>{
    //  count=count+1;
    if (count < 20){
      setCount(count+1);
    }
   
   }
   const removeValue= ()=>{
     if(count > 0){
       setCount(count-1)
     }
    
   }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {count}</h2>
      <button  onClick={Addvalue}>
        Add value {count}
        </button>
      <button onClick={removeValue}>
        remove value{count}
        </button>
      <p>Lorem, ipsum dolor. {count}</p>
    </>
  )
}

export default App
