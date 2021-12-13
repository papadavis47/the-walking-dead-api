const express = require("express");
const { characters } = require("./data.js");
const charactersRouter = require("./routes/characters.js");
const app = express();

const PORT = 5001;

// Setting up the file to serve the landing page on the domain
app.use(express.static("./public"));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up my imported routes
app.use("/api/v1/characters", charactersRouter);

app.all("*", (req, res) => {
  res.status(404).send("Requested Resource Not Found");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}. Oh Yeah Baby!`));
