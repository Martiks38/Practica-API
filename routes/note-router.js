const express = require('express')
const router = express.Router()

const noteController = require('../controllers/note-controller/NoteController')

router
  .get('/api/:user_id/notes', noteController.getAllNotes)
  .get('/api/note/:note_id', noteController.getOneNote)
  .post('/api/create_note', noteController.createNote)
  .post('/api/login', noteController.getUserNotes)
  .patch('/api/update_note/:note_id', noteController.updateNote)
  .delete('/api/:user_id/note/:note_id', noteController.deleteOneNote)
  .delete('/api/:user_id/notes', noteController.deleteAllNotes)

module.exports = router
