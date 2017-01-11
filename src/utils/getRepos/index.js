import 'whatwg-fetch'

const URL = 'https://api.github.com/search/repositories'

const getRepos = ( query, language ) =>
  fetch(`${URL}?q=${query}+language:${language}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

export default getRepos
