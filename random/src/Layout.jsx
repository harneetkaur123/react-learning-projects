import React from 'react'
import Header from './componenets/Header/Header.jsx'
import Footer from './componenets/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;