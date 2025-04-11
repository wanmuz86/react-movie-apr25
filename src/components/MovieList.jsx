import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movieList, passMovieId}) => {
    const handleSelectMovie = (movieID) => {
        passMovieId(movieID)
    }
  return (
    <div>
        {
            movieList.map((movie)=><MovieItem 
            key={movie.imdbID} movie={movie} selectMovie={handleSelectMovie}></MovieItem>)
        }
    </div>
  )
}

export default MovieList