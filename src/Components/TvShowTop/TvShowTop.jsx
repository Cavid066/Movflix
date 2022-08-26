import React from 'react'
import { Link } from 'react-router-dom'
import '../TvShowTop/TvShowTop.scss'


function TvShowTop() {
  return (
    <div className='tv_show_top'>
        <div className="tv_show">
            <h1>Tv <span>Show</span> </h1>
            <ul>
                <li className='home'>
                  <Link to={`/`}>HOME</Link>
                  </li>
            
                <li>TV SHOW</li>
            </ul>
        </div>
    </div>
  )
}

export default TvShowTop