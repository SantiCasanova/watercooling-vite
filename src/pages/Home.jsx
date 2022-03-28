import { motion } from 'framer-motion'
import React from 'react'
import styles from './Home.module.css'
import Stats from '../components/Stats'
// SANTI DEL FUTURO ACORDATE DE ARREGLAR LOS MARGENES TOTALES DE LA PAGINA
// CON EL VIDEO DE TIK TOK QUE GUARDASTE, NAZI
function Home() {
  return (
    <div className={styles.home}>
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
      <Stats />
    </div>
  )
}

export default Home
