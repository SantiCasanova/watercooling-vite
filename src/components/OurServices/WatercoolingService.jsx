import styles from './WatercoolingService.module.css'
import { motion } from 'framer-motion'
import Title from '../utilities/Title'
function WatercoolingService() {
  return (
    <div className={styles.watercooling}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.leftSide}
      >
        <Title className={styles.title} text='Servicio de Watercooling' />
        <span className={styles.text}>
          Somos los numero 1 de Argentina en nuestro sector. Ofrecemos bla bla
          bla bla bla lucio te toca hacer esto porque yo no tengo imaginacion y
          me da mucha paja equisde
        </span>
      </motion.div>
      <div className={styles.rightSide}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.image}
          src='./waterService.jpg'
        />
      </div>
    </div>
  )
}

export default WatercoolingService
