const express = require('express')
const router = express.Router()

const noteController = require('../controllers/note-controller/NoteController')
const userController = require('../controllers/user-controller/UserController')

router
  // Note
  .get('/api/:user_id/notes', noteController.getAllNotes)
  .get('/api/note/:note_id', noteController.getOneNote)
  .post('/api/create_note', noteController.createNote)
  .patch('/api/update_note/:note_id', noteController.updateNote)
  .delete('/api/:user_id/note/:note_id', noteController.deleteOneNote)
  .delete('/api/:user_id/notes', noteController.deleteAllNotes)
  // User
  .get('/api/user/:user_id', userController.getUser)
  .post('/api/new_user', userController.createUser)
  .patch('/api/user/update/:user_id', userController.updateUser)
  .delete('/api/user/delete/:user_id', userController.deleteUser)

module.exports = router
