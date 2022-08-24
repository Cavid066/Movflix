import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import HdIcon from '@mui/icons-material/Hd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import 'swiper/css';
import '../UpcomingSlider/upcomingslider.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction } from '../../redux/actions/MoviesAction';
import {Link} from 'react-router-dom';

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
                        <Link to={`movie/detail/${movie.id}`}>
                        <div className='poster'>
                            <img src={movie.photo} alt="" />
                            <div className='poster__top'>
                                <span className='poster__top__name'>{movie.name}</span>
                                <span className='poster__top__year'>{movie.year}</span>
                            </div>
                            <div className='poster__bottom'>
                                <span className='poster__bottom__icon'>
                                <h4>HD</h4>
                                </span>
                                <span className='poster__bottom__info'>
                                    <span>
                                        <AccessTimeIcon className='duration'/> 128 min
                                    </span>
                                    <span>
                                        <ThumbUpAltIcon className='like'/> 3.5
                                    </span>
                                </span>
                            </div>
                        </div>
                        </Link>

                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

export default UpcomingSlider