import React, { useState } from 'react'

const ThemeChanger = (props) => {
    const [newTheme, setNewTheme] = useState("")
    
    

    return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.changeTheme(newTheme)
            setNewTheme("")

        }}>
            <input type="text" value={newTheme} onChange={(e)=>setNewTheme(e.target.value)} />
            
            <input type="submit" />
        </form>
    </div>
  )
}

export default ThemeChanger