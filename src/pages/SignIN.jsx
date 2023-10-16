// import React, { useState } from 'react'
// function SignIN() {
//     const[person, setPerson] =useState({username: "", email: ""})


//     const handleInput = ()=>{

//     }


//     const handleForm = (e)=>{
//         e.preventDefault()
//         console.log(username,email);
//     }
//   return (
//     <div>
//         <div className='w-50 mx-auto rounded shadow p-5'>
//             <form action="" onSubmit={handleForm}>
//                 <h1 className='text-center'>Login</h1>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input type="text" className="form-control" id="exampleFormControlInput1" value={person.username} onChange={handleInput} placeholder="Enter your name"/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="exampleFormControlInput1" value={person.email} onChange={handleInput} placeholder="name@example.com"/>
//                 </div>
//                 <button className='btn btn-primary' type='submit'>Submit</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignIN