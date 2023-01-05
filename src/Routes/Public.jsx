import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Movies from '../Components/Movies'
import MovieDetails from '../Pages/MovieDetails'
import AddToSquad from '../Pages/AddToSquad'

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-to-squad' element={<AddToSquad />} />
            <Route path='/squad' element={<Movies />} />
            <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
    )
}

export default Public