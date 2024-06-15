import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'


const PostItem = ({postID,content,title,thumbnail,category}) => {
  return (
    <article className='post'>
      <div className='post_thumbnail'>
      <img src={`http://localhost:5173/src/images/${thumbnail}`} />

      </div>
      <div className='post_content'>
        <Link to={`/posts/${postID}`} className='post-title'>
          <h3>{title}</h3>
        </Link>
        <p>{content}</p>
        <div className='post_footer'>
          <PostAuthor />
          <Link to={`posts/categories/${category}`} className='category'><button className='category-btn'>{category}</button></Link>
          

        </div>

      </div>


    </article>

  )
}

export default PostItem
