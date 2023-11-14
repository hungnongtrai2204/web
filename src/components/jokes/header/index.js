import styles from './styles.module.css'

const JokeHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>A joke a day keeps the doctor away</h1>
        <p className={styles.header__description}>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>
    </div>
  )
}

export default JokeHeader
