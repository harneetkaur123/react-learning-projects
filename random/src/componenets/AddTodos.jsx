import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../featurs/todo/todoslice'


function AddTodos() {
    const [input , setInput]=useState('')
    const dispatch = useDispatch()

    const add =(e)=>{
              e.preventDefault()
              if(!input) return
              dispatch(addTodo(input))
              setInput('')
    }
  return (

    <form className='w-full flex flex-row'
      onSubmit={add}
    >
      
       <input type="text" 
        className='w-full outline-none rounded-l-2xl shadow-md px-4 py-2.5 bg-gray-500 text-white'
        placeholder='Enter Todo'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
       />
       <button className='py-2 px-3 bg-green-500 text-white font-bold rounded-r-2xl'>Add</button>

    </form>
  )
}

export default AddTodos