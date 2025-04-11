
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Search from './components/Search'
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])

  const handleMovieSearch = async (movieName) => {
    console.log(movieName)

    // Fetch movie data from API
    const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=87d10179`)
    console.log(response.data)
    setMovies(response.data.Search)
  }
 
  return (
    <>
      <Header/>
      <div className='container'>
      <Search retrieveMovieSearch={handleMovieSearch}/>
      <MovieList movieList={movies}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
