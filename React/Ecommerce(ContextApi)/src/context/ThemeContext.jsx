import React, { createContext } from 'react'

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
    const data = "Abhay"
    
  return (
    <ThemeDataContext.Provider value={data}>{props.children}</ThemeDataContext.Provider>
  )
}

export default ThemeContext