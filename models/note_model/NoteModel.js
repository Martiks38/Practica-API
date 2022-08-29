const conn = require('../connection')

class NoteModel {
  getAllNotes(id, cb) {
    const query = 'select * from notes where user = ?'

    conn.query(query, id, cb)
  }

  getOneNote(note_id, cb) {
    const query = 'select * from notes where note_id = ?'
    conn.query(query, note_id, cb)
  }

  deleteAllNotes(user_id, cb) {
    const query = 'delete from notes where user = ?'
    conn.query(query, user_id, cb)
  }

  deleteOneNote(note_id, cb) {
    const query = 'delete from notes where note_id = ?'
    conn.query(query, note_id, cb)
  }

  createNote(dataNote, cb) {
    const query = 'insert into notes set ?'

    conn.query(query, dataNote, cb)
  }

  updateNote(note_id, dataNote, cb) {
    const query = 'update notes set ? where note_id = ?'
    conn.query(query, [dataNote, note_id], cb)
  }
}

const noteModel = new NoteModel()

module.exports = noteModel
