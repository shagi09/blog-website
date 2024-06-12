import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import axios from 'axios'


  const formats = [
    'font','size',
    'bold','italic','underline','strike',
    'color','background',
    'script',
    'header','blockquote','code-block',
    'indent','list',
    'direction','align',
    'link','image','video','formula',
  ]
  const Post_Categories=[
    'Business','Education','Entertainment','Art','Investment','Uncategorised','Weather'
  ]



const CreatePost = () => {
  const [title,setTitle]=useState('')
  const [thumbnail,setThumbnail]=useState('')
  const [content,setContent]=useState('')
  const [category,setCategory]=useState('')
  const navigate=useNavigate('')

  async function HandleSubmit(e){
    e.preventDefault(e)
    const formData=new FormData()
    formData.append('title',title)
    formData.append('category',category)
    formData.append('content',content)
    formData.append('thumbnail',thumbnail)

    /*axios.post('http://127.0.0.1:3001/create',formData).then(result=>console.log(result).catch(err=>console.log(err)))*/
    try {
      const response = await axios.post('http://127.0.0.1:3001/create', formData);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }




  }
  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };
  const handleContentChange = (value) => {
    setContent(value);
  };


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
  return (
    <div className='createPost-container'>
        <div className='createPost'>
          <h1>Create Post</h1>
          <div className='error-message'>
            this is error message
          </div>
          <form action="" onSubmit={HandleSubmit}>
          <div className='title'>
            <input type="text" placeholder='title' value={title} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <div className='post-content'>
            <select name="category"  value={category} onChange={e=>setCategory(e.target.value)} >
              {
                Post_Categories.map(cat=>
                  <option key={cat}>{cat}</option>
                )

              }

              </select>
            <ReactQuill  formats={formats} value={content} onChange={handleContentChange}/>
            <input type="file"  onChange={handleThumbnailChange}  />
            <button type='submit' className='edit-btn'>Submit</button>
            </div>
          </form>



          
        </div>
      
    </div>
  )
}

export default CreatePost
