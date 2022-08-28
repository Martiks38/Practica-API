const express = require('express')
const router = express.Router()

const noteController = require('../controllers/note-controller/NoteController')

router.get('/notes', noteController.getAllNotes)

module.exports = router
