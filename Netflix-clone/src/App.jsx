import './App.css'
import HeroSection from './components/HeroSection'
import ReasonstoJoin from './components/ReasonstoJoin'
import TrendingMovies from './components/TrendingMovies'

function App() {

  return (
   <div className='container' >
    <HeroSection/>
    <TrendingMovies />
    <ReasonstoJoin />
     
   </div>
  )
}

export default App
