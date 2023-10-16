import React, { useState } from 'react'
import '../style.css'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
  // const [isloggedin, setisloggedin] = useState(true)
  return (
    <div>
      {/* {isloggedin && <h1>Hello World!</h1>}
      {isloggedin ? <h1>Hello World!</h1>: <h1>You are here</h1>}

      <div classNameName={isloggedin ? 'user': 'guest'}>
        {isloggedin ? <p>User</p> : <p>Guest</p>} */}
      {/* </div> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="login">Login</a>
        {/* <a className="nav-link" href="contact">contact</a> */}
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='/'>home</NavLink>
        <Link to='product'>product</Link>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar