import { motion } from 'framer-motion'
import styles from './Bars.module.css'

function Bars() {
  return (
    <div className={styles.bars}>
      <div className={styles.container}>
        <span className={styles.oldStatistics}>72° C</span>
        <div className={styles.bar}>
          <motion.span
            className={styles.filledBar}
            initial={{ width: '600px' }}
            whileInView={{ width: '350px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={styles.newStatistics}
            >
              51° C
            </motion.p>
          </motion.span>
        </div>
        <span className={styles.title}>GPU TEMP</span>
      </div>

      <div className={styles.container}>
        <span className={styles.oldStatistics}>75° C</span>
        <div className={styles.bar}>
          <motion.span
            className={styles.filledBar}
            initial={{ width: '600px' }}
            whileInView={{ width: '450px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={styles.newStatistics}
            >
              63° C
            </motion.p>
          </motion.span>
        </div>
        <span className={styles.title}>CPU TEMP</span>
      </div>

      <div className={styles.container}>
        <span className={styles.oldStatistics}>46 dBA</span>
        <div className={styles.bar}>
          <motion.span
            className={styles.filledBar}
            initial={{ width: '600px' }}
            whileInView={{ width: '300px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={styles.newStatistics}
            >
              40 dBA
            </motion.p>
          </motion.span>
        </div>
        <span className={styles.title}>NOISE LEVELS</span>
      </div>
    </div>
  )
}

export default Bars
