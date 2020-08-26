import React from 'react'
import PropTypes from 'prop-types'

// Components
import Card from './Card'

function List({ movies, errorMessage }) {
  return (
    <ul className="list">
      {movies.length > 0 ? movies.map(({ imdbID, Poster, Title, Year }) => (
        <Card key={imdbID} id={imdbID} poster={Poster} title={Title} year={Year} />
      )) : (
        <li className="list__noresult">{errorMessage}</li>
      )}
    </ul>
  )
}

List.propTypes = {
  movies: PropTypes.array,
  errorMessage: PropTypes.string
}

export default List
