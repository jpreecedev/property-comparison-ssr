import { renderToString } from 'react-dom/server'
import * as React from 'react'
import { StaticRouter } from 'react-router-dom'

import renderFullPage from './renderFullPage'
import App from '../App'

function router(req, res) {
  const context = {}

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  res.status(200).send(renderFullPage(html, {}))
}

export default router
