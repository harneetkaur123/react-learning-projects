import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [todo,setTodo]=useState("")
  const {addTodo} = useTodo()

  const app = (e)=>{
       e.preventDefault()
       addTodo({todo:todo,completed:false})
       setTodo("")
  }

  return (
    <form onSubmit={app} className='flex'>
        <input 
        type="text"
        className='w-full bg-gray-600 rounded-l-xl py-1.5 px-3 text-lg focus:outline-none'
        placeholder='Write Todo.....'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
         />
         <button className='bg-green-600 text-white font-medium text-lg py-1.5 px-4 rounded-r-xl cursor-pointer'>Add</button>
    </form>
)
}

export default TodoForm