import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Heart({ movieId }) {
  const [favorite, setFavorite] = useState()

  useEffect(() => {
    const isFavorite = localStorage.getItem(movieId)
    setFavorite(isFavorite)
  }, [])

  function handleClick() {
    if (favorite) {
      setFavorite(false)
      localStorage.removeItem(movieId)
    } else {
      setFavorite(true)
      localStorage.setItem(movieId, true)
    }
  }

  return (
    <svg
      className={`heart ${favorite ? 'heart--active' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 500 550"
      onClick={() => handleClick()}
    >
      <g>
        <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
          c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
          c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
          s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
          C512,93.417,453.532,30,376,30z" />
      </g>
    </svg>
  )
}

Heart.propTypes = {
  movieId: PropTypes.string
}

export default Heart
