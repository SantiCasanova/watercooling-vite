import { motion } from 'framer-motion'
import styles from './BannerOne.module.css'

function Home() {
  return (
    <div>
      <div className={styles.background}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.content}
        >
          <img src='/logo.png' className={styles.logo} />
          <span className={styles.title}>MG MODDING</span>
          <span className={styles.text}>REFRIGERACIÓN EXTREMA PARA TU PC</span>
        </motion.div>
        <motion.div>
          <img src='/9zbuild.png' className={styles.image}></img>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
