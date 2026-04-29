import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/about/About.jsx'
import Contact from './componenets/contact/Contact.jsx'
import User from './componenets/User/User.jsx'
import Github , {githubinfo} from './componenets/GitHub/Github.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


// const router= createBrowserRouter(

//   createRoutesFromElements(
//      <Route path="/" element={<Layout/>}>
//      <Route path="" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//        <Route path="contact" element={<Contact/>} />
//        <Route path="user/:Userid" element={<User/>} />
//        <Route
//         loader={githubinfo}
//        path='github'
//         element={<Github/>}/>
//      </Route>
      
//   )
// )

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <App/>
 </Provider>
)
