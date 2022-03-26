import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.option}>
        <img src='/logo.png' className={styles.logo} />
      </Link>
      <Link to='/' className={styles.option}>
        Water Cooling
      </Link>
      <Link to='/' className={styles.option}>
        Modding
      </Link>
      <Link to='/' className={styles.option}>
        Hardware
      </Link>
      <Link to='/' className={styles.option}>
        Servicios
      </Link>
      <Link to='/' className={styles.option}>
        FAQ
      </Link>
    </nav>
  )
}

export default Navbar
