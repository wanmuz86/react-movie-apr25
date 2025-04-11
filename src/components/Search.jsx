import React from 'react'

const Search = () => {
  return (
    <div className='row'>
        {/* Input 3/4 */}
        <div className='col-8'>
            <input type="text" className='form form-control' 
            placeholder='Enter movie name' />

        </div>
        {/* Button 1/4 */}
        <div className='col-4'>
            <button className='btn btn-primary' style={{width:'100%'}}>Search</button>
        </div>
    </div>
  )
}

export default Search