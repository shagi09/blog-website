import React from 'react'
import { useState } from 'react'
import avatar1 from '../images/avatar3.jpg'
import avatar2 from '../images/avatar4.jpg'
import avatar3 from '../images/avatar5.jpg'
import avatar4 from '../images/avatar6.jpg'
import { Link } from 'react-router-dom'

const AuthorsData=[
  {id:1, avatar:avatar1, name:'yidnekachew tesema', posts:3},
  {id:2, avatar:avatar2, name:'azeb tesema', posts:5},
  {id:3, avatar:avatar3, name:'samuel negash', posts:2},
  {id:4, avatar:avatar4, name:'yidnekachew alkugn', posts:0},
]




const Authors = () => {
  const [authors,setAuthors]=useState(AuthorsData)
  return (
    <section className='authors-section'>
      <div className='authors-container'>
        {
          authors.map(({id,avatar,name,posts})=>{
            return <Link key={id} to={`/posts/users/${id}`}>
              <div className='authors'>
                <div className='authors-image'>
                  <img src={avatar} alt="" />
                </div>
                <div className='authors-content'>
                  <h4>{name}</h4>
                  <p>{posts}</p>


                </div>
              </div>

            </Link>

          })
        }
      </div>
    </section>

  )
}

export default Authors
