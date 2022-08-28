const conn = require('../connection')

class NoteModel {
  getAllNotes(id, cb) {
    const query = 'select * from notes where user = ?'

    conn.query(query, id, cb)
  }

  getOneNote(note_id, cb) {
    const query = 'select * from notes where note_id = ?'
    conn.create
  }

  deleteOneNote() {}

  deleteAllNotes() {}

  saveNote() {}
}

const noteModel = new NoteModel()

module.exports = noteModel
