import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-200 bg-amber-700" 
   style={{backgroundColor: color}}>

    <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0">
     <div className="flex flex-wrap justify-center  rounded-2xl bg-amber-50 px-3 py-2 shadow-lg gap-2" >
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"violet"}} onClick={()=>setColor("violet")}>Violet</button>
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
      <button className="px-4.5 py-2 rounded-3xl text-center text-amber-50 shadow-lg cursor-pointer w-22" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>



    </div>
    </div>
   </div>
  )
}

export default App