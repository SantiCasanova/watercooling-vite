import styles from './OurWorks.module.css'
import Title from '../utilities/Title'
import { motion } from 'framer-motion'

function BannerTwo() {
  return (
    <div className={styles.bannerTwo}>
      <Title text='NUESTROS TRABAJOS' />
      <div className={styles.box}>
        <motion.img
          className={styles.image}
          src='./masterPC.jpg'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className={styles.image}
          src='./greenPC.jpg'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          className={styles.largeImage}
          src='./lucio.jpg'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  )
}

export default BannerTwo
