import React, { useContext } from "react";
import { createContext } from "react";

 export const ThemeContext = createContext({
    ThemeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeContextProvider= ThemeContext.Provider

export function useTheme(){
       return useContext(ThemeContext)
}
