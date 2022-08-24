import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import '../Slider/Slider.scss';
import '../Slider/slider.scss'
// import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Slider() {
    return (
        <div className="slider">
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className="slider_img">
                        <img src="https://movflxx.netlify.app/img/banner/banner_bg01.jpg" alt="" />
                        <div className='movflix_text'>
                            <div className="top_text">
                                <h3>Movflx</h3>
                                <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
                            </div>
                            <div className="details">
                                <h5 className='pg'>PG 18</h5>
                                <h5 className='hd'>HD</h5>
                                <li>Romance,</li>
                                <li>Drama</li>
                                <h4> <CalendarMonthIcon className='detail_icon' /> 2022</h4>
                                <h4><AccessTimeIcon className='detail_icon' />128 min</h4>
                            </div>
                            <button>WATCH NOW</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider_img">
                        <img src="https://occ-0-1567-300.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTAH2e0NA2CoezoBJfVTh4dIvdQWcFcZielMUf9VEWZJFk0bys6yAEl_h5RPoIwh6muQbXaTJP4H9WPwAWUQLZPV3cE9HsWSPOUR.jpg?r=6a0" alt="" />
                        <div className='movflix_text'>
                            <div className="top_text">
                                <h3>Movflx</h3>
                                <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
                            </div>
                            <div className="details">
                                <h5 className='pg'>PG 18</h5>
                                <h5 className='hd'>HD</h5>
                                <li>Romance,</li>
                                <li>Drama</li>
                                <h4>2022</h4>
                                <h4>128 min</h4>
                            </div>
                            <button>WATCH NOW</button>
                        </div>
                    </div>
                </SwiperSlide>





            </Swiper>

        </div>

    )
}

export default Slider