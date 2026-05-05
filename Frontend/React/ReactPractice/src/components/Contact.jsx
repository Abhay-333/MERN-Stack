import React from 'react'

const Contact = ({settoggle}) => {
  return (
    <div onClick={()=>settoggle((prev)=>!prev)}>Contact</div>
  )
}

export default Contact