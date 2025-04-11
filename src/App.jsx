
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
  const [page,setPage] = useState(1)
  const movieNameRef = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
       

      if (isBottom) {
        console.log("Reached the bottom of the page!");
        // Do something, like loading more content
     // Check I am on the 92th page
        fetchApi(movieNameRef.current,page)
        setPage(page+1) // increment page
      }
    };

    // When the window arrive at the end of the page, call the handleScroll function
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMovieSearch = async (title) => {
    
    // setState is asynchronous, so we need to use useRef to get the latest value
    setMovieName(title)
    movieNameRef.current = title; 
    fetchApi(title,page)
    setPage(page+1)

    // Fetch movie data from API
  
  }

  const fetchApi = async (movieName,page) => {
    console.log(movieName)
    const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&page=${page}&apikey=87d10179`)
    // Add the data to the exting []
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
