import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Lib
import ReactPaginate from 'react-paginate'

function Pagination({ totalResults }) {
  const [pages, setPages] = useState(0)

  useEffect(() => {
    if (!totalResults) return
    console.log(getPages(totalResults))
    setPages(getPages(totalResults))
  }, [totalResults])

  function getPages(n) {
    return Math.ceil(parseInt(n) / 10)
  }

  return (
    <div>
      <div className="commentBox">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pages}
          containerClassName={'pagination'}
          subContainerClassName={'pagination__pages'}
          activeClassName={'pagination__pages--active'}
        />
      </div>
    </div>
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.string
}

export default Pagination
