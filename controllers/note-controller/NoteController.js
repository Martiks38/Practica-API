'use strict'

const noteModel = require('../../models/note_model/NoteModel')

class NoteController {
  getAllNotes(req, res) {
    let user_id = req.params.user_id

    let userIdIsOkay = isNaN(parseInt(user_id))

    if (userIdIsOkay)
      return res.status(400).send({ error: 'Error identifying the user' })

    noteModel.getAllNotes(user_id, (err, rows) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      let notes = rows.length ? rows : null

      res.status(200).send({ notes })
    })
  }

  getOneNote(req, res) {
    let note_id = req.params.note_id

    let noteIdIsOkay = isNaN(parseInt(note_id))

    if (noteIdIsOkay)
      return res.status(400).send({ error: 'Error identifying the note' })

    noteModel.getOneNote(note_id, (err, row) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      row.length
        ? res.status(200).send({ note: row[0] })
        : res.status(404).send({ error: 'Not Found' })
    })
  }

  deleteAllNotes(req, res) {
    let user_id = req.params.user_id

    let userIdIsOkay = isNaN(parseInt(user_id))

    if (userIdIsOkay)
      return res.status(400).send({ error: 'Error identifying the user' })

    noteModel.deleteAllNotes(user_id, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      res.status(200).send({ message: 'Deleted notes' })
    })
  }

  deleteOneNote(req, res) {
    let note_id = req.params.note_id

    let noteIdIsOkay = isNaN(parseInt(note_id))

    if (noteIdIsOkay)
      return res.status(400).send({ error: 'Error identifying the note' })

    noteModel.deleteOneNote(note_id, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      res.status(200).send({ message: 'Deleted note' })
    })
  }

  createNote(req, res) {
    let { ...dataNote } = req.body

    noteModel.createNote(note_id, dataNote, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      let response = { message: 'Created note', dataNote }

      res.status(200).send(response)
    })
  }

  updateNote(req, res) {
    let note_id = req.params.note_id

    let noteIdIsOkay = isNaN(parseInt(note_id))

    if (noteIdIsOkay)
      return res.status(400).send({ error: 'Error identifying the note' })

    let { ...dataNote } = req.body

    noteModel.updateNote(note_id, dataNote, (err) => {
      if (err) {
        console.log({
          sqlMessage: err.sqlMessage,
          sql: err.sql,
          errno: err.errno,
        })

        return res.status(500).send({ error: 'Internal server error' })
      }

      let response = { message: 'Updated note', dataNote }

      res.status(200).send(response)
    })
  }
}

const noteController = new NoteController()

module.exports = noteController
