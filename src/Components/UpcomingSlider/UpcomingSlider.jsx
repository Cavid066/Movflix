import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import HdIcon from '@mui/icons-material/Hd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import 'swiper/css';
import '../UpcomingSlider/upcomingslider.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction } from '../../redux/actions/MoviesAction';
function UpcomingSlider({category}) {
    const { movies } = useSelector((state) => state.movies)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesAction())
    }, [])
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
        >
            {
                movies &&
                movies.filter(x=>x.category == category).map((movie, key) => (
                    <SwiperSlide key={key}>
                        <div className='poster'>
                            <img src={movie.photo} alt="" />
                            <div className='poster__top'>
                                <span className='poster__top__name'>{movie.name}</span>
                                <span className='poster__top__year'>{movie.year}</span>
                            </div>
                            <div className='poster__bottom'>
                                <span className='poster__bottom__icon'>
                                    <HdIcon />
                                </span>
                                <span className='poster__bottom__info'>
                                    <span>
                                        <AccessTimeIcon /> 128 min
                                    </span>
                                    <span>
                                        <ThumbUpAltIcon /> 3.5
                                    </span>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

export default UpcomingSlider