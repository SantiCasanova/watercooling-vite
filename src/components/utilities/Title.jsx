import styles from './Title.module.css'
import { motion } from 'framer-motion'

function Title(props) {
  return (
    <div>
      <div
        className={styles.title}
        style={{
          marginLeft: props.marginLeft || 0,
          paddingTop: props.paddingTop || 0
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1] }}
          transition={{ duration: 1 }}
          className={styles.square}
        />
        <span className={styles.titleText}>{props.text}</span>
      </div>
    </div>
  )
}

export default Title
