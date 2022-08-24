import React from 'react'
import Services from '../Components/Services/Services'
import Slider from '../Components/Slider/Slider'
import Upcoming from '../Components/Upcoming/Upcoming'
import OnlineStreaming from '../Components/OnlineStreaming/OnlineStreaming'
import TvSeries from '../Components/TvSeries/TvSeries'
import Subscription from '../Components/Subscription/Subscription'


function Home() {
    return (
        <>
            <Slider />
            <Upcoming />
            <Services />
            <OnlineStreaming/>
            <TvSeries/>
            <Subscription/>
        </>
    )
}

export default Home