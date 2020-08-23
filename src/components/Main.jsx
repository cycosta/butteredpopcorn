import React, { useState, useEffect } from 'react'

import { getMovies } from '../services/api'

// Components
import Search from './Search'
import List from './List'
import HomeCinema from './icons/HomeCinema'

function Main() {
  const [movies, setMovies] = useState([])

  const [keyword, setKeyword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!keyword) return
    getMovies(keyword).then(({ Error: message, Search }) => {
      if (Search) {
        setMovies(Search)
      } else {
        setMovies([])
        setErrorMessage(message)
      }
    })
  }, [keyword])

  return (
    <main className="main">
      <Search setKeyword={setKeyword} />
      {(movies.length === 0 && !errorMessage) ? (
        <HomeCinema />
      ) : (
        <List movies={movies} errorMessage={errorMessage} />
      )}
    </main>
  )
}

export default Main
