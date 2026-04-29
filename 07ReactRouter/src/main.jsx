import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx' 
import Layout from "./Layout.jsx"
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import User from './components/user/User.jsx';
import GitHub, { GithubInfoLoader } from './components/github/GitHub.jsx';

// const router = createBrowserRouter([
//   {
//      path:'/',
//      element:<Layout/>,
//      children:[{
//       path:"home",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
     createRoutesFromElements(
      <Route path="/" element={<Layout/>}>

       <Route path="" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>} />
       <Route path="user/:userId" element={<User/>}></Route>
       <Route 
       loader={GithubInfoLoader}
       path="github" 
       element={<GitHub/>}></Route>
     </Route>
     )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
