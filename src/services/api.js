const apiKey = process.env.REACT_APP_OMDB_API_KEY

// Search Movie
export function getMovies(keyword, page = 1) {
  return fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&type=movie&s=${keyword}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      const { Response, Search, totalResults, Error: message } = data

      return {
        status: Response,
        movies: Search ? Search : [],
        total: totalResults ? totalResults : '0',
        message: message ? message : ''
      }
    })
    .catch((error) => console.error(error))
}

// Get movie by id
export function getMovie(id) {
  return fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&i=${id}`)
  .then(response => response.json())
  .catch((error) => console.error(error))
}
