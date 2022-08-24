import React from 'react'
import '../BlogTop/BlogTop.scss'
import {Link} from 'react-router-dom';


function BlogTop() {
  return (
    <div className='blog_top'>
        <div className="news_update">
            <h1>News Update</h1>
            <ul>
            <Link to={`/`}> 
                <li className='home'>HOME</li>
            </Link>
                <li>BLOG PAGE</li>
            </ul>
        </div>
    </div>
  )
}

export default BlogTop