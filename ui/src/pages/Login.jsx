import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const[user,setUser]=useState({
    email:'',
    password:''
  })
const [success,setSuccess]=useState('')
  const navigate=useNavigate()
  function HandleChange(e){
    setUser((previousState)=>(
      {
        ...previousState,[e.target.name]:e.target.value

      }
    ))

  }
  function HandleSubmit(e){
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/login',{email:user.email,password:user.password})
    .then(result=>{console.log(result)
      if(result.data=='success'){
        setSuccess('success')
        navigate('/')

      }
    })
    
    .catch(err=>console.log(err)
    )
  }
  
  return (
    <div className='register-container'>
      <div className='register'>
        <h1>Sign in</h1>
        <p>{success}</p>
        <form action="" onSubmit={HandleSubmit}>
        <input type="email" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="password" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />
        <button type='submit' className='edit-btn'>Log in</button>
        </form>




      </div><br />

      <p>Don't have an account?<Link to='/register'>Register</Link></p>

      
    </div>
  )
}


export default Login
