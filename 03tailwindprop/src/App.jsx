import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const myobj={
    username:"abc",
    age:21
  }
  return (
    <>
     <h1 className='bg-amber-600 text-white rounded-xl p-4 mb-4'>hello harneet</h1>

    <div className='flex flex-row'>
    <Card name="harneet" btnText='go visit'/>
    <Card  name="abcde"/>
     {/* to send obj and arr do  
        <Card obj={myobj} />
      */}
    </div>
    </>
  )
}

export default App
