'use strict'

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes/note-router')
const port = process.env.PORT || 5050

app
  .set('port', port)
  .use(morgan('dev'))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', routes)

app.listen(app.get('port'), () => {
  console.log(`Escuchando api en el puerto`, app.get('port'))
})
