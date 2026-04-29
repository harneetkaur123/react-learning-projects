import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {removeTodo} from '../featurs/todo/todoslice'

function Lists({todo}) {

 const dispatch = useDispatch()

  return (
    <div className='bg-pink-200 py-1.5 px-3 text-black text-lg flex justify-center items-center rounded-2xl shadow-md mb-3'>
         <h2 className='w-full'>{todo.text}</h2>
         <button className='inline-flex justify-self-center align-middle bg-red-100 rounded-2xl px-2 py-1'
          onClick={()=> dispatch(removeTodo(todo.id))}
         >❌</button>
    </div>
  )
}

export default Lists