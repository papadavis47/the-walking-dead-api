const express = require("express");
const path = require("path");
const { characters } = require("./data.js");

const app = express();

const PORT = 5001;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/v1/characters", (req, res) => {
  res.json(characters);
});

app.get("/api/v1/characters/:characterId", (req, res) => {
  const { characterId } = req.params;
  const singleCharacter = characters.find((character) => character.id === Number(characterId));
  if (!singleCharacter) {
    res.status(404).send("Character not available");
  }
  return res.json(singleCharacter);
});

app.all("*", (req, res) => {
  res.status(404).send("Requested Resource Not Found");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}. Oh Yeah Baby!`));
