import { useState,useEffect } from 'react'
import './App.css'
import {login,logout} from './store/authSlice'
import {useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {Header , Footer} from './components/index'

function App() {
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
        authService.getCurrentUser()
        .then((userData)=>{
            if(userData){
              dispatch(login(userData))
            }
            else {
              dispatch(logout())
            }
        })
        .finally(()=> setLoading(false))
  },[])

   return !Loading ? (
    <div className='min-h-screen bg-gray-400 flex flex-wrap content-between text-black'>
       <div className="w-full block">
          <Header/>
          <main>

          </main>
          <Footer/>
       </div>
    </div>
   ) : null
}

export default App
