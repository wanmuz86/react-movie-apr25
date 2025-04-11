import React, { useEffect, useState } from 'react'
import axios from 'axios'
const MovieDetail = ({movieId}) => {
  
  const [movieDetail,setMovieDetail] = useState(null)


  useEffect(() => {
    fetchData()

  }, [movieId])

  const fetchData = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=87d10179`)
    setMovieDetail(response.data)

  }

  return (
    <div className='card p-5 text-center mt-3'>
      {
        movieDetail && (
          <div>
          <h4>{movieDetail.Title}</h4>
          <p>{movieDetail.Year} - {movieDetail.Type}</p>
          <img src={movieDetail.Poster} alt={movieDetail.Title} />
          <p className='mt-3'>{movieDetail.Plot}</p>
          <p>{movieDetail.Director}</p>
          <p>{movieDetail.Actors}</p>
          <p>{movieDetail.Genre }</p>
          <p>{movieDetail.Runtime }</p>
          <p>{movieDetail.Released }</p>
          </div>
        )
      }
    </div>
  )
}

export default MovieDetail