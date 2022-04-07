import { NavLink, Routes, Route } from 'react-router-dom'
import styles from './OurServices.module.css'
import HardwareService from './HardwareService'
import WatercoolingService from './WatercoolingService'
import ModdingService from './ModdingService'
import MiningService from './MiningService'

const changeClass = navData =>
  navData.isActive ? styles.activeOption : styles.disabledOption

function OurServices() {
  return (
    <div className={styles.services}>
      <div className={styles.servicesNav}>
        <NavLink to='/watercooling' className={changeClass}>
          WATERCOOLING
        </NavLink>
        <NavLink to='/modding' className={changeClass}>
          MODDING
        </NavLink>
        <NavLink to='/hardware' className={changeClass}>
          HARDWARE
        </NavLink>
        <NavLink to='/mining' className={changeClass}>
          MINING
        </NavLink>
      </div>
      <Routes>
        <Route path='watercooling' element={<WatercoolingService />} />
        <Route path='modding' element={<ModdingService />} />
        <Route path='hardware' element={<HardwareService />} />
        <Route path='mining' element={<MiningService />} />
      </Routes>
    </div>
  )
}

export default OurServices
