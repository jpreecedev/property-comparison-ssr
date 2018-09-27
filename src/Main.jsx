/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'regenerator-runtime/runtime'

import './global/styles.scss'
import App from './App'

if (module.hot) {
  module.hot.accept()
}

hydrate(
  <Router>
    <App state={window.__PRELOADED_STATE__} />
  </Router>,
  document.getElementById('root')
)
