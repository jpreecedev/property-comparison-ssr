import { renderToString } from 'react-dom/server'
import * as React from 'react'
import { StaticRouter } from 'react-router-dom'

import page from './page'
import App from '../client/App'

function router(req, res) {
  const context = {}

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  res.status(200).send(page(html, { manifest: req.manifest, state: {} }))
}

export default router
