import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage/Homepage"
import About from "./components/About/About"
import Experiences from "./components/Experiences/Experiences"
import Projects from "./components/Projects/Projects"
import Footer from './components/Footer/Footer'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Experiences' element={<Experiences/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App
