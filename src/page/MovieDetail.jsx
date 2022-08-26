import React, { useEffect } from 'react'
import NewEpisodes from '../Components/NewEpisodes/NewEpisodes'
import WatchEpisode from '../Components/WatchEpisode/WatchEpisode'
import TvSeries from '../Components/TvSeries/TvSeries'
import Subscription from '../Components/Subscription/Subscription'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesById } from '../redux/actions/MoviesAction'
import { useParams } from 'react-router-dom'

function MovieDetail() {


  const {movies} = useSelector((state) => state.movies)
  const {id} = useParams()
  const dispatch = useDispatch ()
  useEffect( () => {
    dispatch(getMoviesById(1))
  }, [])


  return (
    <>
        <NewEpisodes moviesDetail={movies}/>
        {
          movies  &&
          <WatchEpisode seasons={movies.seasons}/>
        }
        
        <TvSeries/>
        <Subscription/>
    </>
  )
}

export default MovieDetail