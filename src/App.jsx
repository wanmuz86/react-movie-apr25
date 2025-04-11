
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Search from './components/Search'

function App() {
 

  return (
    <>
      <Header/>
      <div className='container'>
      <Search/>
      <MovieList/>
      </div>
      <Footer/>
    </>
  )
}

export default App
