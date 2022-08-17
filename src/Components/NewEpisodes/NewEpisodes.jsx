import React from 'react'
import '../NewEpisodes/NewEpisodes.scss'
import HdIcon from '@mui/icons-material/Hd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import ShareIcon from '@mui/icons-material/Share';
import NewEpisodesButton from '../NewEpisodesButton/NewEpisodesButton';

function NewEpisodes() {
  return (
    <div className='new_episodes'>
        <div className="new_episodes_container">
            <div className="movie_image">
                <img src="https://movflxx.netlify.app/img/poster/movie_details_img.jpg" alt="" />
            </div>
            <div className="movie_details">
                <h5>New Episodes</h5>
                <h1>The Easy <span>Reach</span> </h1>
                <p className='slider__text__sub'>
                            <span>
                                <HdIcon />
                            </span>
                            <span>
                                <li>Romance</li>
                                <li>Drama</li>
                            </span>
                            <span>
                                <CalendarMonthIcon className='icon-yellow' /> 2022
                            </span>
                            <span>
                                <AccessTimeIcon className='icon-yellow' /> 128 min
                            </span>
                </p>
                <p className='about_movie'>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.
                </p>
                <div className="share">
                    <div className="share_text">
                      <ShareIcon className='share_icon'/>  
                      <h6>Share</h6>
                    </div>
                    
                    <div className="streaming_channels">
                        <h2>Prime Video</h2>
                        <h6>Streaming Channels</h6>
                    </div>
                    <NewEpisodesButton/>
                </div>
            </div>

            <div className="download">
                <span>
                   DOWNLOAD <SecurityUpdateIcon className='download_icon' /> 
                </span>   
            </div>
        </div>
    </div>
  )
}

export default NewEpisodes