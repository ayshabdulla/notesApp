const express = require('express')
const { createNotes, getAllNotes, updateNotes, deleteNotes } = require('../Controller/notesCtrl')

const notesRoutes = express.Router()

notesRoutes.post('/createNote', createNotes)
notesRoutes.get('/getNotes', getAllNotes)
notesRoutes.put('/updateNote/:id', updateNotes)
notesRoutes.delete('/deleteNote/:id', deleteNotes)

module.exports = notesRoutes