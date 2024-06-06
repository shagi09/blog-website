import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


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



const EditPost = () => {
  const [title,setTitle]=useState('')
  const [thumbnail,setThumbnail]=useState('')
  const [description,setDescription]=useState('')
  const [category,setCategory]=useState('Uncategorised')
  return (
    <div className='createPost-container'>
        <div className='createPost'>
          <h1>Edit Post</h1>
          <div className='error-message'>
            this is error message
          </div>
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
            <ReactQuill  formats={formats} value={description} onChange={e=>setDescription(value)}/>
            <input type="file"  value={thumbnail} onChange={e=>setThumbnail(e.target.files[0])}  />
            <button className='edit-btn'>Update</button>


          </div>
        </div>
      
    </div>
  )
}

export default EditPost
