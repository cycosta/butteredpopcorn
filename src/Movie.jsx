import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from "@reach/router"

import { getMovie } from './services/api'
import placeholder from './assets/images/placeholder.jpg'
import imdbIcon from './assets/images/imdb-icon.png'
import rottenIcon from './assets/images/rotten-icon.png'

// Components
import Arrow from './components/icons/Arrow'
import Heart from './components/icons/Heart'

function Movie({ movieId }) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getMovie(movieId).then((data) => setMovie(data))
  }, [movieId])

  const {
    Runtime,
    Year,
    Rated,
    Title,
    Plot,
    Actors,
    Genre,
    Director,
    Ratings,
    Poster
  } = movie

  const imdbRating = Ratings?.[0]
  const rottenRating = Ratings?.[1]

  const image = Poster === 'N/A' ? placeholder : Poster

  return (
    <div className="movie">
      <Link to="/" className="movie__return">
        <Arrow />
      </Link>
      <div className="movie__content">
        <div className="movie__info">
          <div className="movie__header-info">
            <p className="movie__header-item">{Runtime}</p>
            <p className="movie__header-item">{Year}</p>
            <p className="movie__header-item">{Rated}</p>
          </div>
          <div className="movie__main-info">
            <h1 className="movie__title">{Title}</h1>
            <h2 className="movie__label">Plot</h2>
            <p className="movie__text movie__text--plot">{Plot}</p>
            <h2 className="movie__label">Cast</h2>
            <p className="movie__text">{Actors}</p>
            <h2 className="movie__label">Genre</h2>
            <p className="movie__text">{Genre}</p>
            <h2 className="movie__label">Director</h2>
            <p className="movie__text">{Director}</p>
          </div>
          <ul className="movie__ratings">
            <li className="movie__rating">
              <div className="movie__rating-icon">
                <img className="movie__rating-img" src={imdbIcon} alt="IMDB Icon" />
              </div>
              <div className="movie__rating-info">
                <p className="movie__rating-value">{imdbRating?.Value}</p>
                <span className="movie__rating-label">IMDB</span>
              </div>
            </li>
            <li className="movie__rating">
              <div className="movie__rating-icon">
                <img className="movie__rating-img" src={rottenIcon} alt="Rotten Tomatoes Icon" />
              </div>
              <div className="movie__rating-info">
                <p className="movie__rating-value">{rottenRating?.Value}</p>
                <span className="movie__rating-label">Rotten Tomatoes</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="movie__poster">
          <img className="movie__image" src={image} alt={Title} />
          <button className="movie__bookmark">
            <Heart movieId={movieId} />
          </button>
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  movieId: PropTypes.string
}

export default Movie
