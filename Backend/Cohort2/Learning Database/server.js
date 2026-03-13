// server start krna and db connect krna

const app = require("./src/app.js");
const noteModel = require("./src/models/notes.model.js");
const connectDB = require("./src/config/database.js");
const express = require("express");

app.use(express.json());

connectDB();

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({ title, description });
  res.status(201).json({ message: "Note created Successfull", note });
});

app.get("/notes", async (req,res)=>{
  const note = await noteModel.find()
  res.status(200).json({
    message: "Data Fetch Successfully",
    note
  })
})

app.listen(3000, () => {
  console.log("Server Listening on 3000");
});
