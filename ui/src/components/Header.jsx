import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../images/blog15.jpg'
import axios from 'axios'
import { useEffect } from 'react'

const Header = () => {





  return (
    <div>
          <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>
          <img src={image} alt="logo image" />
        </Link>

        <ul className='nav_menu'>
          <li><Link to='/profile/:id'></Link></li>
          <li><Link to='/create'>create post</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>logout</Link></li>
        </ul>

      </div>

    </nav> 
    </div>
    


  )
}

export default Header
