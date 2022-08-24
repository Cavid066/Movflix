import React from 'react'
import '../OnlineStreaming/OnlineStreaming.scss'
import ModalVideoButton from '../../Components/ModalVideoButton/ModalVideoButton'

function OnlineStreaming() {
  return (
    <div className='onlineStreaming_container'>
        <div className="movie_name">
            <span>Online Streaming</span>
            <h2>Live Movie & TV Shows For Friends & Family</h2>
            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
            <div className="quality">
                <h1>HD 4K</h1>
                <div className="count">
                    <h3>20K+</h3>
                    <p>Active Customer</p>
                </div>
            </div>
            <ModalVideoButton/>
            


        </div>
        <div className="movie_photo">
            <img src="https://movflxx.netlify.app/img/images/live_img.png" alt="" />
        </div>
    </div>

  )
}

export default OnlineStreaming