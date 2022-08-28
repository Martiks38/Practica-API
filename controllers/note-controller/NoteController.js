const noteModel = require('../../models/note_model/NoteModel')

class NoteController {
  getAllNotes(req, res) {
    let user_id = req.body.user_id

    noteModel.getAllNotes(user_id, (err, rows) => {
      if (err) return console.log(err.stack)

      console.log(rows)

      return false
    })
  }

  getOneNote(req, res) {
    let note_id = req.body.note_id

    noteModel.getOneNote(note_id, (err, row) => {
      if (err) return console.log(err)

      console.log(row[0])
    })
  }

  deleteOneNote() {}

  deleteAllNotes() {}

  saveNote() {}
}

const noteController = new NoteController()

module.exports = noteController
