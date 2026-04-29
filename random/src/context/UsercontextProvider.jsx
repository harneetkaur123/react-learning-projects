import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children})=>{
 
     const [data , setData] = useState(null) 
    return (
        <UserContext.Provider value={{data,setData}}>
         {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
