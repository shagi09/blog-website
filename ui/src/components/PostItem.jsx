import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'


const PostItem = ({postID,desc,title,thumbnail,category,authorID}) => {
  return (
    <article className='post'>
      <div className='post_thumbnail'>
        <img src={thumbnail} alt={title} />

      </div>
      <div className='post_content'>
        <Link to={`/posts/${postID}`} className='post-title'>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className='post_footer'>
          <PostAuthor authorID={authorID}/>
          <Link to={`posts/categories/${category}`} className='category'><button className='category-btn'>{category}</button></Link>
          

        </div>

      </div>


    </article>

  )
}

export default PostItem
