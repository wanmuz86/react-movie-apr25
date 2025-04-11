
import { useState,useEffect,useRef } from 'react'
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
  const [movieName, setMovieName] = useState('')  
  const movieNameRef = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
       

      if (isBottom) {
        console.log("Reached the bottom of the page!");
        // Do something, like loading more content
        console.log(movieName)
        fetchApi(movieNameRef.current,2)
      }
    };

    // When the window arrive at the end of the page, call the handleScroll function
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMovieSearch = async (title) => {
    
    setMovieName(title)
    movieNameRef.current = title; 
    fetchApi(title,1)

    // Fetch movie data from API
  
  }

  const fetchApi = async (movieName,page) => {
    console.log(movieName)
    const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&page=${page}&apikey=87d10179`)
    setMovies(prev => [...prev, ...response.data.Search]);
  }

  const handlePassMovie = (imbdId) => {

    setMovieId(imbdId)
  }

  return (
    <>
      <Header />
      <div className='container'>
        <Search retrieveMovieSearch={handleMovieSearch} />
        <div className='row'>
          <div className='col-6'>
            <MovieList movieList={movies} passMovieId={handlePassMovie} />

          </div>
          <div className='col-6'>
            <MovieDetail movieId={movieId} />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
