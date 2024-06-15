import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import PostItem from '../components/PostItem'


const FetchedPosts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        GetPosts()
    },[])
    async function GetPosts(){
        try {
            await axios.get('http://127.0.0.1:3001/post').then(result=>{
                console.log(result)
                setPosts(result.data)
            })
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <section className='posts'>
                    <div className='posts-container'>
            {
                posts.map((post) => (
                    <PostItem
                    key={post.id}
                    postID={post.id}
                    thumbnail={post.thumbnail}
                    category={post.category}
                    title={post.title}
                    desc={post.content}/>


                    
                    

                ))
            } 
            
        </div>
        </section>




    );
}
export default FetchedPosts
