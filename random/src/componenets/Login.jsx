import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
  
    const {setData}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setData({name,password})
    }

  return (
    <div className='text-center'>
            <h2>Login</h2>
        <input type="text" placeholder='enter name' 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
    
        <input type="text" placeholder='enter password' 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login;