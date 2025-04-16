
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
  const [loading,setLoading] = useState(false);
  const movieNameRef = useRef('');
  

  useEffect(() => {
    const handleScroll = () => {
      

      // To detect by the end of the page
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
       

      if (isBottom) {
        console.log("Reached the bottom of the page!");
        // Do something, like loading more content
     // Check I am on the 92th page

// The setter in useState is asynchronous
  // Calling setState using previous value -> To override the basic setstate, so API call can be called before 
  // setting the value of the state
  // setPage(prevPage => prevPage + 1)

     setPage(prevPage => {
    
      const nextPage = prevPage + 1; // constant variable
      fetchApi(movieNameRef.current, nextPage); // call the api
      return nextPage; // updating the state

    });
    
      }
    };

    // When the window arrive at the end of the page, call the handleScroll function

    // Wait for the scrolling event to happen
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
   setLoading(true)
    const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&page=${page}&apikey=87d10179`)
    // Add the data to the exting []
    setLoading(false)
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
            {loading && <div className='text-center'>Loading...</div> }
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
