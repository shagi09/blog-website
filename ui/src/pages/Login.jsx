import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const[user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  function HandleChange(e){
    setUser((previousState)=>(
      {
        ...previousState,[e.target.name]:e.target.value

      }
    ))

  }
  return (
    <div className='register-container'>
      <div className='register'>
        <h1>Sign in</h1>
        <p>This is an error message</p>
        <input type="email" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="password" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />



      </div><br />
      <button className='edit-btn'>Log in</button>
      <p>Don't have an account?<Link to='/register'>Register</Link></p>

      
    </div>
  )
}

export default Login
