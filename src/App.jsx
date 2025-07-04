import { Routes, Route, Link } from 'react-router'
import './styles/App.css'

import NavBar from './components/NavBar'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      {/*<nav>*/}
      {/*  <Link to="/">Home</Link>*/}
      {/*  <Link to="/about">About</Link>*/}
      {/*</nav>*/}
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
