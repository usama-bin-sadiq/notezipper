const express = require('express');
const notes = require("./data/notes");



const app = express();

app.get('/',(req,res)=>{
    res.send("API is Running..");
})
app.get('/api/notes',(req,res)=>{
    console.log(res.params);
    res.json(notes);
})

app.get("/api/notes/:id/", (req, res) => {
  const note = notes.find((note)=>note._id === req.params.id);
  
  res.send(note);
});
app.listen(5000,console.log("Server Started on Port 5000"));
