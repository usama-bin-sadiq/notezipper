const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is Running..");
});
app.get("/api/notes", (req, res) => {
  console.log(res.params);
  res.json(notes);
});

app.get("/api/notes/:id/", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);

  res.send(note);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
