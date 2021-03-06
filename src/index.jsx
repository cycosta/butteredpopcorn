import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import Home from './Home'
import Movie from './Movie'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Movie path="/movie/:movieId" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
