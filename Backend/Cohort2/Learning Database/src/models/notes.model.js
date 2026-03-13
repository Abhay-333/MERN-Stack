const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("note",noteSchema) // we need model to access the db

module.exports = noteModel