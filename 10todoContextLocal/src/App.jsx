import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
          setTodos( (prev) => [...prev,{id: Date.now(),...todo}])    
  }

  const  updateTodo = (id,todo)=>{
         setTodos ( (prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id) =>{
      setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id !== id))
  }
  const toggleComplete = (id)=>{
     setTodos((prev)=>prev.map((prevTodo)=> 
      (prevTodo.id === id ? {...prevTodo ,completed : !prevTodo.completed}: prevTodo)))
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
       <div className='min-h-screen bg-[#172842] p-8'>
         <div className='w-full max-w-2xl mx-auto  text-white'>
            <h1 className='text-3xl font-semibold text-white mb-3'>Manage your Todos</h1>
            <div className='mb-4'>
            <TodoForm/>
            </div>
            <div className='flex flex-wrap gap-y-4'>
              {
                todos.map((todo)=>(
                  <div key={todo.id} className='w-full'>
                    <TodoItems todo={todo} />
                  </div>
                ))
              }
            </div>
         </div>
       </div>
    </TodoProvider>
  )
}

export default App
