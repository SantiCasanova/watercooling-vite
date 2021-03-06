import styles from './Stats.module.css'
import Bars from './Bars'
import Title from '../utilities/Title'

function Stats() {
  return (
    <div className={styles.container}>
      <Title text='WHY CUSTOM COOLING?' marginLeft={140} />
      <div className={styles.stats}>
        <div className={styles.item}>
          <span className={styles.percentages}>25%</span>
          <span className={styles.text}>LOWER GPU TEMPS</span>
        </div>
        <div className={styles.item}>
          <span className={styles.percentages}>15%</span>
          <span className={styles.text}>LOWER CPU TEMPS</span>
        </div>
        <div className={styles.item}>
          <span className={styles.percentages}>50%</span>
          <span className={styles.text}>LOWER NOISE LEVELS</span>
        </div>
      </div>

      <div className={styles.bottomPart}>
        <div className={styles.leftSide}>
          <span className={styles.bottomPartTitle}>PROVEN PERFORMANCE</span>
          <p className={styles.bottomPartText}>
            Hydro X Series custom cooling helps push your systems performance as
            far as it can go, while lowering temperatures and noise levels CPUs
            and graphics cards run hot under heavy load. While gaming, this heat
            causes air cooler fans to run at a very high speed, producing noise.
            Unlike air coolers, water cooling doesnt blow hot air around your
            case. The liquid moves heat to the radiators, and efficiently blows
            it out of your case. This means you can run fans at much lower
            speeds, reducing noise output while still keeping unmatched cooling
            performance. Moving the cooling to radiators outside the usual hot
            zones also gives you much better overclocking capabilities.
          </p>
        </div>

        <div className={styles.rightSide}>
          <Bars title='NOISE LEVELS' oldStatistics='46 dBA' />
        </div>
      </div>
    </div>
  )
}

export default Stats
