import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ourservices' element={<OurServices />} />
      </Routes>
    </div>
  )
}

export default App
