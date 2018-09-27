import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'regenerator-runtime/runtime'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="" component={NotFound} />
    </Switch>
  )
}

export default App
