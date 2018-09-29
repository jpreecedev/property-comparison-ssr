import { renderToString } from 'react-dom/server'
import * as React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'

import page from './page'
import App from '../client/App'

const routes = ['/', '/about']

function router(req, res) {
  const match = routes.reduce(
    (acc, route) => matchPath(req.url, { path: route, exact: true }) || acc,
    null
  )

  if (!match) {
    res.status(404).send('page not found')
    return
  }

  const context = {}

  const html = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  )

  res.status(200).send(page(html, { manifest: req.manifest, state: {} }))
}

export default router
