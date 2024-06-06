import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (


      <div className='error-container'>
        <div className='error'>
        <Link to='/'><button className='btn-error'>Go Back Home</button></Link>
      <h1>Page Not Found</h1>
        </div>

      

        
      
    </div>
  )
}

export default ErrorPage
