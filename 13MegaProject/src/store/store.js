import {configureStore} from "@reduxjs/toolkit"
import authreducre from './authSlice'
const store = configureStore({
     reducer: {
        auth : authSlice,
    }
})

export default store;