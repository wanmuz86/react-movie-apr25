import React, { useState } from 'react'

const Search = ({retrieveMovieSearch}) => {
    const [movieName,setMovieName] = useState('')
  
    return (
    <div className='row'>
        {/* Input 3/4 */}
        <div className='col-8'>
            <input type="text" 
            className='form form-control' 
            placeholder='Enter movie name'
            value={movieName}
            onChange={(e)=> setMovieName(e.target.value)}
        />

        </div>
        {/* Button 1/4 */}
        <div className='col-4'>
            <button 
            className='btn btn-primary' 
            style={{width:'100%'}}
            onClick={() => {
                
                retrieveMovieSearch(movieName)
            }}
            >Search</button>
        </div>
    </div>
  )
}

export default Search