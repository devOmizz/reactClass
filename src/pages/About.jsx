import React from 'react'
import Contact from './Contact'

function About(icon) {
  return (
    <div>About
        <p>My name is: {icon.name}</p>
        <Contact/>
    </div>
  )
}

export default About