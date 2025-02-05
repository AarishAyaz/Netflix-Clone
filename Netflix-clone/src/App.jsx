import './App.css'
import FAQs from './components/FAQs'
import HeroSection from './components/HeroSection'
import ReasonstoJoin from './components/ReasonstoJoin'
import TrendingMovies from './components/TrendingMovies'

function App() {

  return (
   <div className='container' >
    <HeroSection/>
    <TrendingMovies />
    <ReasonstoJoin />
    <FAQs />
     
   </div>
  )
}

export default App
