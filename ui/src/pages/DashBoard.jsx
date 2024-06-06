import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom'

const DashBoard = () => {
  const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <div className='dashboard-container'>
        {
          posts.map((posts)=>{
            return (
            <div key={posts.id} className='dashboard-content'>
              <div className='dashboard-image'>
                <img src={posts.thumbnail} alt="" />

              </div>
              <div className='dashboard-title'>
                <h5>{posts.title}</h5>

              </div>
              <div className='dashboard-links'>
                <Link to={`/posts/${posts.id}`}>view</Link>
                <Link className={'edit-btn'} to={`/posts/${posts.id}/edit`}>edit</Link>
                <Link className='delete-btn' to={`/posts/${posts.id}/delete`}>delete</Link>

                
              </div>

            </div>
            )
          

          })

        }

      
    </div>
  )
}

export default DashBoard
