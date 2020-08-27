import React, { useState, useEffect } from 'react'

import { getMovies } from '../services/api'

// Components
import Search from './Search'
import Loader from './Loader'
import List from './List'
import HomeCinema from './icons/HomeCinema'

function Main() {
  const [movies, setMovies] = useState([])

  const [keyword, setKeyword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const [totalResults, setTotalResults] = useState('')

  const [page, setPage] = useState()

  useEffect(() => {
    if (!keyword) return
    setLoading(true)
    getMovies(keyword).then(({ Error: message, Search, totalResults }) => {
      if (Search) {
        setMovies(Search)
        setTotalResults(totalResults)
      } else {
        setMovies([])
        setErrorMessage(message)
      }
      setLoading(false)
    })
  }, [keyword])

  useEffect(() => {
    setLoading(true)
    getMovies(keyword, page).then(({ Error: message, Search, totalResults }) => {
      if (Search) {
        setMovies(Search)
        setTotalResults(totalResults)
      } else {
        setMovies([])
        setErrorMessage(message)
      }
      setLoading(false)
    })
  }, [page])

  return (
    <main className="main">
      <Search setKeyword={setKeyword} />

      {loading ? (
        <Loader />
      ) : (
        !keyword ? (
          <HomeCinema />
        ) : (
          <List
            movies={movies}
            errorMessage={errorMessage}
            totalResults={totalResults}
            setPage={setPage}
            page={page}
          />
        )
      )}
    </main>
  )
}

export default Main
