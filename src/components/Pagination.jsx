import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Pagination({ totalResults }) {
  const [pagination, setPagination] = useState([])

  useEffect(() => {
    if (!totalResults) return
    const pagination = createPagination(totalResults)
    setPagination(pagination)
  }, [totalResults])

  function createPagination(n) {
    const pages = Math.ceil(parseInt(n) / 10)
    return [...Array(pages).keys()].map(i => i + 1)
  }

  return (
    <div>
      {pagination.map((page) => <p key={page}>{page}</p>)}
    </div>
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.string
}

export default Pagination
