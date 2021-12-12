const express = require("express");
const { characters } = require("./data.js");

const app = express();

const PORT = 5001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>The Walking Dead REST API</h1><a href="/api/characters">Characters<a/>');
});

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}. Oh Yeah Baby!`));
