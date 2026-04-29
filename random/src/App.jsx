import { useEffect, useState } from 'react'
import './App.css'
import Counter from './componenets/Counter'
import TailwindCard from './componenets/TailwindCard'
import BgChanger from './componenets/BgChanger'
import PasswordGenerator from './componenets/PasswordGenerator'
import InputBox from './componenets/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import UserContextProvider from './context/UsercontextProvider'
import Login from './componenets/Login'
import Profile from './componenets/Profile'
import { ThemeProvider } from './context/ThemeContext'
import Card from './componenets/Card'
import Btn from './componenets/Btn'
import { TodoProvider } from './context/TodoContext'
import Form from './componenets/form'
import Items from './componenets/Items'
import AddTodos from './componenets/AddTodos'
import Lists from './componenets/Lists'
import {useSelector} from 'react-redux'

function App() {
   const todo = useSelector(state=> state.todos)
     
     

  return (


    <div className='h-screen w-full bg-white'>
         <div className='max-w-2xl mx-auto mt-15'>

            <div className='w-full'>
             <AddTodos/>
             </div>
             {/* <div className='w-full mt-5'> */}
                {todo.map((todo)=>(
                    <div className='w-full mt-5' key={todo.id}>
                    <Lists todo={todo}/>
                 </div>
                ))}
             {/* </div> */}
         </div>
         
    </div>
  )
}

export default App
