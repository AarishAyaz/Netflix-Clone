import './App.css'
import HeroSection from './components/HeroSection'
import Trending from './components/Trending'
import TrendingMovies from './components/TrendingMovies'

function App() {

  return (
   <div className='container' >
    <HeroSection/>
    <TrendingMovies />
     
   </div>
  )
}

export default App
