import React from 'react'
import './addpost.css'

export default function Addpost() {
    const postHandle=()=>{
        alert("Your post is submitted successfully")
    }
  return (
    <div>
        <div className='entire-post'>
        <h3>Your post</h3>
        <div className='title-div'>
            <input placeholder='Enter your post title' className='title'/>
        </div>
        <div className='description-div'>
            <textarea className='description' rows='15' cols='50' placeholder='Your post Description'/>
        </div>
        <div className='post-button-div'>
            <button className='post-button' onClick={postHandle}>Post</button>
        </div>
        </div>
    </div>
  )
}
