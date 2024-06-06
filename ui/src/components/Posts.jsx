import React from 'react'
import { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'


const Posts = () => {
    const[posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        {posts.length>0?
                <div className='posts-container'>
                {
                    posts.map(({id,thumbnail,category,title,desc,authorID})=> <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} authorID={authorID} desc={desc}/>)
                }
                </div>:<h1>No Posts Yet</h1>
        }


            
        

    </section>


  )
}

export default Posts
