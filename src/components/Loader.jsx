import React from 'react'

// Images
import film from '../assets/images/film.png'
import camera from '../assets/images/camera.png'

function Loader() {
  return (
    <div className="loader">
      <div className="loader__container">
        <div className="loader__film">
          <img className="loader__film-img" src={film} alt="" />
          <img className="loader__film-img" src={film} alt="" />
        </div>
        <img className="loader__camera" src={camera} alt="" />
        <div className="loader__light"></div>
      </div>
    </div>
  )
}

export default Loader
