import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movieList}) => {
  return (
    <div>
        {
            movieList.map((movie)=><MovieItem 
            key={movie.imdbID} movie={movie}></MovieItem>)
        }
    </div>
  )
}

export default MovieList