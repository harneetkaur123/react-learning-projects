import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
function App() {
  return (
    <>
    <div className='min-h-screen bg-gray-500'>
      <div className='max-w-3xl w-full mx-auto'>
        <h1 className='py-5 text-4xl text-white'>Todos</h1>
         <AddTodo />
         <Todos />
      </div>
    </div>
     </>
  )
}

export default App
