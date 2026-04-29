import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'



function Profile() {
    
    const {data}=useContext(UserContext)
  
    if(!data) return <div>Please login</div>
    
    return <div>WELCOME {data.name}</div>
}

export default Profile;