import React from 'react'
import PropTypes from 'prop-types'

function Movie({ movieId }) {
  return (
    <div>{movieId}</div>
  )
}

Movie.propTypes = {
  movieId: PropTypes.string
}

export default Movie
