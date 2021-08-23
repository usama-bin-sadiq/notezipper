const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
dotenv.config();

connectDB();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("API is Running..");
// });
// app.get("/api/notes", (req, res) => {
//   console.log(res.params);
//   res.json(notes);
// });

// app.get("/api/notes/:id/", (req, res) => {
//   const note = notes.find((note) => note._id === req.params.id);
//   res.send(note);
// });

app.use("/api/users",userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
