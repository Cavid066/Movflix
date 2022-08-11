import React from 'react'
import Services from '../Components/Services/Services'
import Slider from '../Components/Slider/Slider'
import Upcoming from '../Components/Upcoming/Upcoming'

function Home() {
    return (
        <>
            <Slider />
            <Upcoming />
            <Services />
        </>
    )
}

export default Home