'use strict'

const userModel = require('../../models/user_model/UserModel')

class UserController {
  getUser(req, res) {
    let user_id = req.params.user_id

    userModel.getUser(user_id, (err, row) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      res.status(200).send(row[0])
    })
  }

  deleteUser(req, res) {
    let user_id = req.params.user_id

    userModel.deleteUser(user_id, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      res.status(200).send({ message: 'User Deleted' })
    })
  }

  createUser(req, res) {
    let { ...dataUser } = req.body

    userModel.createUser(dataUser, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      let response = { message: 'Created user', dataUser }

      res.status(200).send(response)
    })
  }

  updateUser(req, res) {
    let user_id = req.params.user_id

    let userIdIsOkay = typeof parseInt(user_id) !== 'number'

    if (userIdIsOkay)
      return res.status(400).send({ error: 'Error identifying the note' })

    let { ...dataUser } = req.body

    userModel.updateUser(user_id, dataUser, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      let response = { message: 'Updated user', dataUser }

      res.status(200).send(response)
    })
  }
}

const userController = new UserController()

module.exports = userController
