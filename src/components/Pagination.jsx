import React from 'react'
import PropTypes from 'prop-types'

// Lib
import ReactPagination from "react-js-pagination";

function Pagination({ totalResults, setPage, page }) {
  return (
    <div>
      <ReactPagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={parseInt(totalResults)}
        pageRangeDisplayed={10}
        innerClass={'pagination'}
        itemClass={'pagination__page'}
        linkClass={'pagination__link'}
        activeClass={'pagination__page--active'}
        onChange={(clickedPage) => setPage(clickedPage)}
        prevPageText={'‹'}
        nextPageText={'›'}
      />
    </div>
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.string,
  setPage: PropTypes.func,
  page: PropTypes.number
}

export default Pagination
