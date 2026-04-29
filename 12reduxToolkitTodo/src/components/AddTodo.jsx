import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
    const [input , setInput] = useState('')
     const ip=useSelector(state => state.inputText)
    const dispatch = useDispatch()
    useEffect(()=>{
      setInput(ip)
    },[ip])
    const add = (e)=>{
         e.preventDefault()
         dispatch( addTodo (input))
         setInput('')
    }
  return (
    <form onSubmit={add} className='flex'>
        <input 
        type="text"
        className='w-full  bg-gray-900 text-white rounded-l-lg py-2 px-3 text-lg focus:outline-none'
        placeholder='Write Todo.....'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
         />
         <button type="submit"
          className='bg-green-200 hover:bg-green-300 text-gray-900 font-medium text-lg py-1.5 px-4 rounded-r-lg cursor-pointer'>
            Add</button>
    </form>
  )
}
export default AddTodo;