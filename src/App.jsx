import './App.css'
import About from './components/About'
import FAQs from './components/FAQs'
import GradientCurve from './components/Gradientcurve'
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
    <About />
   </div>
  )
}

export default App
