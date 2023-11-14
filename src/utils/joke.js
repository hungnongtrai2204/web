import jokeData from '../data/jokes.json'
//get jokes data
export const getJokesData = () => {
  return JSON.parse(JSON.stringify(jokeData))
}

//check user read all jokes
export const checkUserReadAllJokes = () => {
  if (!localStorage.getItem('isReadAllJoke')) {
    localStorage.setItem('isReadAllJoke', false)
  }
  return JSON.parse(localStorage.getItem('isReadAllJoke'))
}

//get current joke read
export const getCurrentJokeRead = () => {
  if (localStorage.getItem('currJoke')) {
    return localStorage.getItem('currJoke')
  } else {
    return 0
  }
}

//function create random number 1 -> n
function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1
}

// Create list random joke and save to local storage jokes
export const createJokeList = numStories => {
  let curr
  let ids = []
  let jokes = []

  // Create random id joke list
  while (ids.length < numStories) {
    if (ids.indexOf((curr = getRandomNumber(numStories))) === -1) {
      ids.push(curr)
    }
  }

  // Create story list
  for (let i = 0; i < ids.length; i++) {
    jokes.push(`joke${ids[i]}`)
  }

  // Check if list random joke is existing
  let listReadJokes
  if (!localStorage.getItem('jokes')) {
    listReadJokes = jokes
    localStorage.setItem('jokes', JSON.stringify(listReadJokes))
  } else {
    listReadJokes = JSON.parse(localStorage.getItem('jokes'))
  }

  return listReadJokes
}
