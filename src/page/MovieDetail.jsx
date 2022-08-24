import React from 'react'
import NewEpisodes from '../Components/NewEpisodes/NewEpisodes'
import WatchEpisode from '../Components/WatchEpisode/WatchEpisode'
import TvSeries from '../Components/TvSeries/TvSeries'
import Subscription from '../Components/Subscription/Subscription'

function MovieDetail() {
  return (
    <>
        <NewEpisodes/>
        <WatchEpisode/>
        <TvSeries/>
        <Subscription/>
    </>
  )
}

export default MovieDetail