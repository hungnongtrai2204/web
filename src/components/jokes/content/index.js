import { useState } from 'react'
import { checkUserReadAllJokes, createJokeList, getCurrentJokeRead, getJokesData } from '../../../utils/joke'
import styles from './styles.module.css'

const JokeContent = () => {
  const jokes = getJokesData()

  const numStories = jokes.length
  let jokesRead
  let currJoke

  const isReadAll = checkUserReadAllJokes()
  currJoke = getCurrentJokeRead()
  jokesRead = createJokeList(numStories)

  // Show joke in first time
  let jokeDisplay
  if (isReadAll) {
    jokeDisplay = "That's all the jokes for today! Come back another day!"
  } else {
    jokeDisplay = jokes.find(j => j.id === jokesRead[currJoke]).content
  }
  const [joke, setJoke] = useState(jokeDisplay)

  const randomJokeHandler = () => {
    if (isReadAll || currJoke >= numStories) {
      setJoke("That's all the jokes for today! Come back another day!")
      return
    } else {
      currJoke = JSON.parse(localStorage.getItem('currJoke')) + 1
      if (currJoke >= numStories) {
        localStorage.setItem('isReadAllJoke', true)
        setJoke("That's all the jokes for today! Come back another day!")
        return
      }
      setJoke(jokes.find(j => j.id === jokesRead[currJoke]).content)
    }
    localStorage.setItem('currJoke', currJoke)
  }
  return (
    <div className={styles.joke}>
      <div className={styles.joke__container}>
        <div className={styles.row}>
          <div className={styles.col_full}>
            <div className={styles.row}>
              {/* Joke paragrah */}
              <p className={styles.joke__content}>{joke}</p>
            </div>

            {/* Votes joke */}
            <div className={styles.joke__votes}>
              <div className={styles.row}>
                <div id="like-btn" className={styles.col_half}>
                  <button onClick={randomJokeHandler} className={`${styles.btn} ${styles.btnLike}`}>
                    This is Funny!
                  </button>
                </div>
                <div id="unlike-btn" className={styles.col_half}>
                  <button onClick={randomJokeHandler} className={`${styles.btn} ${styles.btnUnLike}`}>
                    This in not funny.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JokeContent
