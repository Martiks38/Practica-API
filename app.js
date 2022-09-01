'use strict'

const NODE_ENV = require('./env')

if (NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')

const noteRoutes = require('./routes/note-router')
const userRoutes = require('./routes/user-router')
const port = process.env.PORT || 5050

app
  .set('port', port)
  .use(morgan('dev'))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', noteRoutes)
  .use('/', userRoutes)
  .use((req, res) => {
    let url = `${req.protocol}://${req.hostname}:${app.get('port')}${
      req.originalUrl
    }`
    res.status(400).send({ message: `Bad Request`, url })
  })

app.listen(app.get('port'), () => {
  console.log(`Escuchando api en el puerto`, app.get('port'))
})
