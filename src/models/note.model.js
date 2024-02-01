const mongoose = require("mongoose")
const shortid = require("shortid")

const NoteSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    shorten: {
        type: String,
        required: true,
        default: shortid.generate
    },
    views: {
        type: Number, 
        required: false,
        default: 0
    }
})

module.exports = mongoose.model("notes", NoteSchema)