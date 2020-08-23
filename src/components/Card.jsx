import React from 'react'
import PropTypes from 'prop-types'

import placeholder from '../assets/images/placeholder.jpg'

// Components
import Heart from './icons/Heart'
import Eye from './icons/Eye'

function Card({ poster, title, year }) {
  const image = poster === 'N/A' ? placeholder : poster

  return (
    <li className="card">
      <figure className="card__figure">
        <img className="card__image" src={image} alt={title} />
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
          <span className="card__year">{year}</span>
        </figcaption>
      </figure>
      <button className="card__bookmark">
        <Heart />
      </button>
      <button className="card__button">
        <Eye />
      </button>
    </li>
  )
}

Card.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
}

export default Card
