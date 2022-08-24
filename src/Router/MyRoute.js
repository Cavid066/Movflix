import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../page/Blog'
import Home from '../page/Home'
import MovieDetail from '../page/MovieDetail'
import Pricing from '../page/Pricing'


function MyRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/detail/:id' element={<MovieDetail/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/pricing' element={<Pricing/>} />

            {/* <Pricing/> */}
        </Routes>
    </div>
  )
}

export default MyRoute