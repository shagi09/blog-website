import React from 'react'
import { useNavigate } from 'react-router-dom'



const LogOut = () => {
  const navigate=useNavigate()
  function LogOut(){
    window.localStorage.setItem('isLoggedIn',false)
    navigate('/login')


  }

  return (
    <div className='logout'>
        <h1>Are You Sure You Want To LogOut?</h1><button onClick={LogOut}>LogOut</button>

      
    </div>
  )
}

export default LogOut
