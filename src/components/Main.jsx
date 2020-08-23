import React from 'react'

// Components
import Search from './Search'
import List from './List'
import HomeCinema from './icons/HomeCinema'

function Main() {
  return (
    <main className="main">
      <Search />
      <HomeCinema />
      <List />
    </main>
  )
}

export default Main
