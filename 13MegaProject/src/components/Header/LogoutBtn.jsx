import React from 'react'
import {logout} from '../../store/authSlice'
import authSevice from '../../appwrite/auth'
import { useDispatch} from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandeler = ()=>{
         authSevice.logout().then(()=>{
             dispatch(logout())
             })
    }
  return (
    <div className='inline-block px-6 py-2 hover:bg-blue-100 rounded-full duration-200'>Logout</div>
  )
}

export default LogoutBtn