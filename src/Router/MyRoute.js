import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../page/Blog'
import Home from '../page/Home'
import MovieDetail from '../page/MovieDetail'


function MyRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/detail/:id' element={<MovieDetail/>} />
            <Route path='/blog/:id' element={<Blog/>} />
        </Routes>
    </div>
  )
}

export default MyRoute