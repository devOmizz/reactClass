import React from 'react'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignIN from './pages/SignIN.jsx'
import File from './components/File.jsx'
import {myContext} from './MyContext.jsx'

function Home() {
  let myName = 'David Omisakin'
  return (
    <div>
        {/* <NavBar/> */}
        {/* <h1>This is our home Page.</h1> */}
        <myContext.Provider value={myName}>
          <About/>
          <Login/>
          <File/>
          <Footer/>
        </myContext.Provider>
        
    </div>
  )
}

export default Home