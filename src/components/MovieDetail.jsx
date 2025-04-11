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
    <div>
      {
        movieDetail && (
          <div>
          <h6>{movieDetail.Title}</h6>
          </div>
        )
      }
    </div>
  )
}

export default MovieDetail