
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

import Search from './components/Search'
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])
  const [movieId, setMovieId] = useState(null)

  const handleMovieSearch = async (movieName) => {
    console.log(movieName)

    // Fetch movie data from API
    const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=87d10179`)
    console.log(response.data)
    setMovies(response.data.Search)
  }

  const handlePassMovie = (imbdId) => {
   
    setMovieId(imbdId)
  }
 
  return (
    <>
      <Header/>
      <div className='container'>
      <Search retrieveMovieSearch={handleMovieSearch}/>
      <MovieList movieList={movies} passMovieId={handlePassMovie}/>
      <MovieDetail movieId={movieId}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
