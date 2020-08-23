import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Clapperboard from './icons/Clapperboard'

function Search({ setKeyword }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setKeyword(searchValue)
  }

  return (
    <form action="" className="search" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        name="search"
        className="search__input"
        placeholder="Let's find your next movie"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button type="submit" className="search__button">
        <Clapperboard />
      </button>
    </form>
  )
}

Search.propTypes = {
  setKeyword: PropTypes.func,
}

export default Search
