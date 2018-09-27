function renderFullPage(html, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and Babel 7</title>
  </head>

  <body>
    <div id="root">
      ${html}
    </div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
      )}
    </script>
    <script src="/bundle.js"></script>
  </body>

  </html>
  `
}

export default renderFullPage
