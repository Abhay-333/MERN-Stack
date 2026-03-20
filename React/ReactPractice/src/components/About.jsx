import React from 'react'

const About = ({settoggle}) => {
  return (
    <div onClick={()=>settoggle((prev)=>!prev)}>About</div>
  )
}

export default About