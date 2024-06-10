import React, { useState } from 'react'
import { MdMovieEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import avatar from '../images/avatar10.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';



const UserProfile = () => {
  const [image,setImage]=useState('')
  const[data,setData]=useState({
    name:'',
    email:'',
    currentPassword:'',
    newPassword:'',
    confirmPassword:''
  })
  const navigate=useNavigate('')

  const checkLoginStatus = useCallback(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn=='false') {
      // Redirect the user to the login page if they are not logged in
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);
  function HandleInput(e){
    setData((previousState)=>({
       ...previousState,[e.target.name]:e.target.value
    }
    ))
  }

  function HandleChange(e){
    setImage(e.target.files[0])
  
  }
  return (
    <div className='user-profile-container'>
      <div className='user-profile'>
        <Link to='/myposts/sdf'>My Posts</Link>
        <div className='user-profile-image'>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Selected" />
        ) : (
          <img src={avatar} alt="Placeholder" />
        )}
          

        </div>
        <div className='user-profile-btn'>
          <input type="file"  accept='png,jpg,jpeg' name='file' id='file' onChange={HandleChange} style={{ display: 'none' }}/>
          <label htmlFor="file">
          {image ? (
            <FaCheck/> 
          ) : (
            <MdMovieEdit/>
          )}
          </label>
          

        </div>
        <h1>Shalom Wubu</h1>
        <input type="text" name='FullName' placeholder='FullName' onChange={data.name}/>
        <input type="email" name='email' placeholder='Email' onChange={data.email}/>
        <input type="password" name='currentpassword' placeholder='currentPassword' onChange={data.currentPassword}/>
        <input type="password" name='newpassword' placeholder='newPassword' onChange={data.newPassword}/>
        <input type="password" name='confirmpassword' placeholder='confirmPassword' onChange={data.confirmPassword}/>
        <button className='edit-btn'>Update Details</button>


      </div>

      
    </div>
  )
}

export default UserProfile
