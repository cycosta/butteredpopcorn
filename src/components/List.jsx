import React from 'react'
import PropTypes from 'prop-types'

// Components
import Card from './Card'
import Pagination from './Pagination'

function List({ movies, errorMessage, totalResults, setPage, page }) {
  return (
    <>
      <ul className="list">
        {movies.length > 0 ? movies.map(({ imdbID, Poster, Title, Year }) => (
          <Card key={imdbID} id={imdbID} poster={Poster} title={Title} year={Year} />
        )) : (
          <li className="list__noresult">{errorMessage}</li>
        )}
      </ul>
      <Pagination totalResults={totalResults} setPage={setPage} page={page} />
    </>
  )
}

List.propTypes = {
  movies: PropTypes.array,
  errorMessage: PropTypes.string,
  totalResults: PropTypes.string,
  setPage: PropTypes.func,
  page: PropTypes.number
}

export default List
