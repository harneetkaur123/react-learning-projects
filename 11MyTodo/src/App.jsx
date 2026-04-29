import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './componenets/TodoForm'
import TodoItems from './componenets/TodoItems'
import { TodoProvider } from './context/TodoContext'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
     setTodos((prev)=> [...prev,{...todo,id:Date.now()}])
    }
   const updateTodo = (id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
   }
  const toggleComplete = (id)=>{
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo.completed))

  }
   const deleteTodo = (id)=>{
     setTodos((prev)=> prev.filter((prevTodo)=>prevTodo.id !== id ))
   }

   useEffect(()=>{
      const todo = JSON.parse(localStorage.getItem("todos"));
      if(todo && todo.length > 0){
         setTodos(todo)
      }
  },[])

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className='min-h-screen bg-gray-800 px-4'>
         <div className='w-full max-w-2xl py-8 mx-auto text-white'>
          <h1 className='text-4xl py-3 '>My Todo</h1>
              <div className='mb-4'>
                <TodoForm/>
              </div>
              <div className='flex flex-wrap gap-y-3'>
                {todos.map((todo)=>(
                  <div key={todo.id} className='w-full'>
                      <TodoItems  todo={todo}/>
                  </div>
                ))}
              </div>
         </div>
      </div>
    </TodoProvider>
  )
}

export default App
