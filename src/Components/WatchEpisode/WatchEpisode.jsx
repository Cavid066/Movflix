import React from 'react'
import '../WatchEpisode/WatchEpisode.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccordionMenu from '..//AccordionMenu/AccordionMenu'

function WatchEpisode() {
    return (
        <div className='watch_episode'>
            <div className="watch_episode_container">
                <div className="watch_episode_details">
                    <div className="episodes">
                        <div className="episodes_top">
                            <div className="episodes_text">
                                <h6>ONLINE STREAMING</h6>
                                <h1>Watch Full Episode</h1>
                            </div>
                            <div className="views">
                                <p>2.7 million <VisibilityIcon className='view_icon' /></p>
                            </div>
                        </div>
                        <div className="episode_names">
                            <AccordionMenu />
                        </div>
                    </div>

                    <div className="movie_img">
                        <img src="https://themebeyond.com/html/movflx/img/images/episode_img.jpg" alt="" />
                    </div>
                </div>
                
                <div className="about_history">
                    <div className="about_history_head">
                        <h2>About <span>History</span></h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit optio sapiente inventore at quos architecto sint consequatur ipsam sed iste quidem, delectus, vel fuga ipsum ipsa. Unde cumque fugiat quidem nam, reprehenderit facere nihil fuga beatae totam suscipit rerum placeat, voluptatibus sint error maxime non soluta cupiditate illum, quis sunt blanditiis sapiente commodi minus? Deserunt voluptas, rerum magni neque odio ipsum nam recusandae culpa velit maxime asperiores, facilis vel modi porro minima. Dicta, adipisci dolorem officia quam facere exercitationem quisquam magni facilis provident eos at, reprehenderit voluptate. Culpa, harum.</p>
                </div>
            </div>
        </div>
    )
}

export default WatchEpisode