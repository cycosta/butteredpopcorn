const apiKey = process.env.REACT_APP_OMDB_API_KEY

// Search Movie
export function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apiKey=${apiKey}&type=movie&s=${keyword}&page=1`)
    .then(response => response.json())
    .catch((error) => console.error(error))
}
