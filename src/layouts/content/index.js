import JokeContent from '../../components/jokes/content'
import JokeHeader from '../../components/jokes/header'
import styles from './styles.module.css'

const Content = () => {
  return (
    <div className={styles.container}>
      <JokeHeader />
      <JokeContent />
    </div>
  )
}

export default Content
