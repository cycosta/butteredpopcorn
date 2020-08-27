import React from 'react'
import PropTypes from 'prop-types'

import placeholder from '../assets/images/placeholder.jpg'

// Components
import Heart from './icons/Heart'
import Eye from './icons/Eye'

function Card({ id, poster, title, year }) {
  const image = poster === 'N/A' ? placeholder : poster

  return (
    <li className="card">
      <a href={`/movie/${id}`}>
        <figure className="card__figure">
          <img className="card__image" src={image} alt={title} />
          <figcaption className="card__caption">
            <h2 className="card__title">{title}</h2>
            <span className="card__year">{year}</span>
          </figcaption>
        </figure>
        <button className="card__button">
          <Eye />
        </button>
      </a>
      <button className="card__bookmark">
        <Heart movieId={id} />
      </button>
    </li>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
}

export default Card
