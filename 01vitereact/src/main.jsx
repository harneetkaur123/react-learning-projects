import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function abc(){
//     return (
//      <h1>Hello world</h1>
// }
const element =(
   <a href="https://google.com">visite google</a>
);
const username="chai aur react";
const reactEl=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    "click to vsiste google",
    username
)
createRoot(document.getElementById('root')).render(
    // element 
    // abc()       dont use this tarika 
     reactEl
    // <App/>
)
