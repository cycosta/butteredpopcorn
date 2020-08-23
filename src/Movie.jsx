import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getMovie } from './services/api'
import placeholder from './assets/images/placeholder.jpg'

function Movie({ movieId }) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getMovie(movieId).then((data) => setMovie(data))
  }, [movieId])
  console.log(movie)

  const image = movie.Poster === 'N/A' ? placeholder : movie.Poster

  return (
    <main className="main">
      <div className="movie">
        <div className="movie__info">
          <h1 className="movie__title">{movie.Title}</h1>
          <h2 className="movie__label">Plot</h2>
          <p className="movie__plot">{movie.Plot}</p>
        </div>
        <div className="movie__poster">
          <img className="movie__image" src={image} alt={movie.Title} />
        </div>
      </div>
    </main>
  )
}

Movie.propTypes = {
  movieId: PropTypes.string
}

export default Movie
