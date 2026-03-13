// yaha server create aur config kerenge
const express = require("express");

const app = express();
const notes = [];

app.use(express.json());

app.get("/notes", (req, res) => {
  res.send(notes);
  res.status(200).json({
    notes: notes,
  });
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Note created successfully",
  });
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(204).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = app;
