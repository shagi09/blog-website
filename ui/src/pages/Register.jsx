import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
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
  function HandleSubmit(e){
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/register',{name:user.name,email:user.email,password:user.password,confirmPassword:user.confirmPassword})
    .then(result=>console.log(result)).catch(err=>console.log(err)
    )


  }
  return (
    <div className='register-container'>
      <div className='register'>
        <form action="" onSubmit={HandleSubmit}>
        <h1>Sign Up</h1>
        <p>This is an error message</p>
        <input type="text" name='name' placeholder='Full Name'value={user.name} onChange={HandleChange} />
        <input type="email" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="password" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />
        <input type="password" name='confirmPassword' placeholder='Confirm Password'value={user.confirmPassword} onChange={HandleChange} />
        <button type='submit' className='edit-btn'>Register</button>

        </form>




      </div><br />

      <p>Already have an account?<Link to='/login'>login</Link></p>

      
    </div>
  )
}

export default Register
