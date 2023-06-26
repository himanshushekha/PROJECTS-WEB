import React from 'react'
import './PostItem.css'

function PostItem({post}) {
  return (
    <div className='container'>
        <h1>ID: {post.id}</h1>
        <h2>Title:{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default PostItem