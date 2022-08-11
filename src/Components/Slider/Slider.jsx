import React from 'react'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import HdIcon from '@mui/icons-material/Hd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import '../Slider/slider.scss'
function Slider() {
    const swiper = useSwiper();
    console.log(swiper);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]} 
            navigation={true}
        >
            <SwiperSlide>
                <div className='slider'>
                    <img src="" alt="" />
                    <div className='slider__text'>
                        <p className='slider__text__logo'>ComparFlix</p>
                        <p>
                            <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
                        </p>
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
                        <button onClick={() => swiper.slideNext()} className='slider__text__btn'>
                            <PlayArrowIcon />  <span>Whatch Now</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider'>
                    <img src="" alt="" />
                    <div className='slider__text'>
                        <p className='slider__text__logo'>ComparFlix</p>
                        <p>
                            <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
                        </p>
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
                        <button className='slider__text__btn'>
                            <PlayArrowIcon />  <span>Whatch Now</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider'>
                    <img src="" alt="" />
                    <div className='slider__text'>
                        <p className='slider__text__logo'>ComparFlix</p>
                        <p>
                            <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1>
                        </p>
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
                        <button className='slider__text__btn'>
                            <PlayArrowIcon />  <span>Whatch Now</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider