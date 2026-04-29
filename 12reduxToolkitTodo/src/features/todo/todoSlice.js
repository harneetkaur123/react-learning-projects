
import {nanoid,createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos:[],
    inputText:"",
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo : (state,action)=>{
            const todo ={
               id:nanoid(),
               text:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)            
        },

        updateTodo:(state,action)=>{
                
          state.todos.map((todo)=>{
            if(todo.id=== action.payload){
                state.inputText=todo.text
            }
         })      
                     
                  
        }
    }
})

export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer