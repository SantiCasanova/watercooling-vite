import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Watercooling from './pages/Watercooling/Watercooling'
import Faq from './pages/FAQ/Faq'
import Modding from './pages/Modding/Modding'
import Hardware from './pages/Hardware/Hardware'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='watercooling' element={<Watercooling />} />
        <Route path='modding' element={<Modding />} />
        <Route path='hardware' element={<Hardware />} />
        <Route path='faq' element={<Faq />} />
      </Routes>
    </div>
  )
}

export default App
