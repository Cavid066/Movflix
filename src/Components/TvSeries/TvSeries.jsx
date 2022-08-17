import React from 'react'
import '..//TvSeries/TvSeries.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function TvSeries() {
    return (
        <div className='series'>
            <div className='tv_series_top_text'>
                    <h5>BEST TV SERIES</h5>
                    <h1>World Best TV Series</h1>
                </div>
            <div className="series_container">
                
                <div className="movie_box">
                    <img src="https://themebeyond.com/html/movflx/img/poster/ucm_poster09.jpg" alt="" />
                    <div className="movie_text">
                        <div className="movie_top_text">
                            <h3 className='movie_name'>Women's Day</h3>
                            <h3 className='year'>2022</h3>
                        </div>
                        <div className="movie_bottom_text">
                            <h4>HD</h4>
                            <div className='movie_details'>
                                <span> <AccessTimeIcon className='duration' /> 128 min</span>
                                <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_box">
                    <img src="https://themebeyond.com/html/movflx/img/poster/ucm_poster10.jpg" alt="" />
                    <div className="movie_text">
                        <div className="movie_top_text">
                            <h3 className='movie_name'>Women's Day</h3>
                            <h3 className='year'>2022</h3>
                        </div>
                        <div className="movie_bottom_text">
                            <h4>HD</h4>
                            <div className='movie_details'>
                                <span> <AccessTimeIcon className='duration' /> 128 min</span>
                                <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_box">
                    <img src="https://themebeyond.com/html/movflx/img/poster/ucm_poster02.jpg" alt="" />
                    <div className="movie_text">
                        <div className="movie_top_text">
                            <h3 className='movie_name'>Women's Day</h3>
                            <h3 className='year'>2022</h3>
                        </div>
                        <div className="movie_bottom_text">
                            <h4>HD</h4>
                            <div className='movie_details'>
                                <span> <AccessTimeIcon className='duration' /> 128 min</span>
                                <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_box">
                    <img src="https://themebeyond.com/html/movflx/img/poster/ucm_poster03.jpg" alt="" />
                    <div className="movie_text">
                        <div className="movie_top_text">
                            <h3 className='movie_name'>Women's Day</h3>
                            <h3 className='year'>2022</h3>
                        </div>
                        <div className="movie_bottom_text">
                            <h4>HD</h4>
                            <div className='movie_details'>
                                <span> <AccessTimeIcon className='duration' /> 128 min</span>
                                <span> <ThumbUpAltIcon className='like' /> 3.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TvSeries