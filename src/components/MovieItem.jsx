import React from 'react'

const MovieItem = ({movie}) => {
  return (
    <div className='card p-3'>
        <h4>{movie.Title}</h4>

    </div>
  )
}

export default MovieItem