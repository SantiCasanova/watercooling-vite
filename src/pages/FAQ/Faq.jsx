import styles from './Faq.module.css'
import Title from '../../components/utilities/Title'

function Faq() {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Title
          text='PREGUNTAS MÁS FRECUENTES'
          marginLeft={140}
          paddingTop={50}
        />
      </div>
    </div>
  )
}

export default Faq
