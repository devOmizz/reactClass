import React, { useContext } from 'react'
import {myContext} from '../MyContext'

function File() {
    const contextData = useContext(myContext)
  return (
    <div>Hello </div>
  )
}

export default File