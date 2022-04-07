import Navbar from './components/NavBar/Navbar'
import Stats from './components/Stats/Stats'
import BannerOne from './components/BannerOne/BannerOne'
// import OurWorks from './components/OurWorks/OurWorks'
import OurServices from './components/OurServices/OurServices'

function App() {
  return (
    <div>
      <Navbar />
      <BannerOne />
      <Stats />
      {/* <OurWorks /> */}
      <OurServices />
    </div>
  )
}

export default App
