import React from 'react'

const MovieItem = ({movie,selectMovie}) => {
    const handleMovieClicked = () => {
        selectMovie(movie.imdbID)
    }
    
  return (
    // Card with 2 columns, with margin top bottom 3 , padding 3
    <div className='card p-3 my-3 bg-light' onClick={handleMovieClicked}>
        <div className='row'>
            {/* 1/6 of the screen */}
            <div className='col-2'>
                <img src={movie.Poster} alt={movie.Title} className='img-fluid'/>
            </div>
             {/* 5/6 of the screen */}
            <div className='col-10'>
            <h4>{movie.Title}</h4>
                <p>{movie.Year} - {movie.Type}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieItem