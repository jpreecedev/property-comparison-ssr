/* eslint-disable no-console */
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import { join } from 'path'
import router from './router'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

const assets = express.static(join(__dirname, '../src'))

app.use(assets)
app.get('*', router)

app.set('port', process.env.PORT || 3002)
app.listen(app.get('port'))

console.log(`listening on ${process.env.PORT || 3002}`)

export default app
