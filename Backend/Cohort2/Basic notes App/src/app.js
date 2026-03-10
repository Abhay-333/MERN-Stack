// yaha pe server create krte hai aur yaha pe server ko config krte hai
const express = require("express")

const app = express()
const notes = []
app.use(express.json())


app.get("/notes", (req,res)=>{
    res.send(notes)
})

app.post("/notes", (req,res)=>{
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})

app.delete("/notes/:index", (req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted Successfully")
})

app.patch("/notes/:index", (req,res)=>{
    console.log(notes[req.params.index])
    notes[req.params.index].description = req.body.description
    // notes[req.params.index].title = req.body.title
    res.send("note updated Successfully")
})

module.exports = app