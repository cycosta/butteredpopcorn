import React from 'react'

// Components
import Heart from './icons/Heart'
import Eye from './icons/Eye'

function Card() {
  return (
    <li className="card">
      <figure className="card__figure">
        <img className="card__image" src="https://via.placeholder.com/310x460" alt="" />
        <figcaption className="card__caption">
          <h2 className="card__title">Movie Title</h2>
          <span className="card__year">2020</span>
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

export default Card
