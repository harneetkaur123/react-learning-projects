import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItems({todo}) {
  const [todoMsg,setTodoMsg]=useState(todo.todo)
  const [isEditable,setIsEditable]=useState(false)
  const {updateTodo,deleteTodo,toggleComplete} = useTodo()

  const editTodo = ()=>{
      updateTodo(todo.id,{...todo,todo:todoMsg})
      setIsEditable(false)
  }
  const togglecompleted =()=>{
      toggleComplete(todo.id)
  }
  return (
    <div className={`w-full flex  mt-3 py-2 px-3 rounded-xl gap-x-3 ${todo.completed?"bg-green-200":"bg-pink-200"}`}>
      <input type="checkbox"
        className='cursor-pointer'
        checked={todo.completed}
        onChange={togglecompleted}
      />
      <input type="text" 
       className={`outline-none w-full border  text-black bg-transparent rounded-xl 
        ${isEditable?"border-black/10 px-2" : "border-transparent"}
        ${todo.completed?"line-through":""}`}
       autoFocus
       value={todoMsg}
       readOnly={!isEditable}
       onChange={(e)=> setTodoMsg(e.target.value)}
      />
      <button 
      className='bg-white rounded-lg cursor-pointer w-10 h-8'
       onClick={ ()=>{
         if(isEditable){
             editTodo()
         }else setIsEditable((prev)=>!prev)
       }}
      > {isEditable ? "📁" : "✏️"}</button>

      <button 
      className='bg-white rounded-lg cursor-pointer w-10 h-8'
       onClick={()=> deleteTodo(todo.id)}
      >"❌"</button>

    </div>
  )
}

export default TodoItems