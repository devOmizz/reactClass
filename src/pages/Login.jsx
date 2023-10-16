import React, { useContext, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import swal from '../../node_modules/sweetalert/dist/sweetalert.min.js'
import {myContext} from '../MyContext'
function Login() {
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')


    const contextData = useContext(myContext)
    const handleForm = (e)=>{
        e.preventDefault()
        console.log(username,email);
        if(username === '' || email === ''){
            // alert('Please fill the required fields')
            swal("Empty fields", "Please fill the required fields", "error")
        } else {
            swal('Login successful', "We'll redirect you shortly", "success")
        }
    }
  return (
    <div>
        <div className='w-50 mx-auto rounded shadow p-5'>
            <form action="" onSubmit={handleForm}>
                <h1 className='text-center'>Login</h1>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={username} onChange = {(e)=>setUsername(e.target.value)} placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" value={email} onChange = {(e)=>setEmail(e.target.value)} placeholder="name@example.com"/>
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
        <h1>{contextData}</h1>
    </div>
  )
}

export default Login