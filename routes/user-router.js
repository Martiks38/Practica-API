const express = require('express')
const router = express.Router()

const userController = require('../controllers/user-controller/UserController')

router
  .get('/api/user/:user_id', userController.getUser)
  .post('/api/new_user', userController.createUser)
  .patch('/api/user/update/:user_id', userController.updateUser)
  .delete('/api/user/delete/:user_id', userController.deleteUser)

module.exports = router
