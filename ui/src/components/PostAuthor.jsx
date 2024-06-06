import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar1.jpg'

const PostAuthor = (authorID) => {
  return (
    <Link to={`posts/users/df`} className='post-author'>
        <div className='post-author-avatar'>
            <img src={avatar} alt="" />

        </div>
        <div className='post-author-details'>
            <h5>by shalom wubu</h5>
            <small>just now</small>
        </div>
    </Link>

  )
}

export default PostAuthor
