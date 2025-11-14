const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        default: 'General'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})
const notesModel = mongoose.model('Notes',notesSchema)
module.exports = notesModel