import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../featurs/todo/todoslice'
export const store = configureStore({
    reducer:todoReducer
})