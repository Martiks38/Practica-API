const NODE_ENV = require('../env')
if (NODE_ENV !== 'production') {
  require('dotenv').config()
}

const mysql = require('mysql')
const conf = require('./db.config.json').mysql

let dbOptions = { ...conf }

if (process.env.PASSWORD) dbOptions.password = process.env.PASSWORD

let myConn = mysql.createConnection(dbOptions)
myConn.connect((err) => {
  return err
    ? console.log(`Error al conectarse a MySQL: ${err.stack}`)
    : console.log(`Conexión establecida con MySQL N° ${myConn.threadId}`)
})

module.exports = myConn
