import React from 'react'

// Components
import Clapperboard from './icons/Clapperboard'

function Search() {
  return (
    <form action="" className="search">
      <input
        type="search"
        name="search"
        className="search__input"
        placeholder="Let's find your next movie"
        required
      />
      <button type="submit" className="search__button">
        <Clapperboard />
      </button>
    </form>
  )
}

export default Search
