const express = require("express");
const router = express.Router();
// Requiring path for now - for some future experiments
const path = require("path");

const { characters } = require("../data.js");

router.get("/", (req, res) => {
  res.json(characters);
});

// router.post("/api/v1/characters", (req, res) => {});

router.get("/:characterId", (req, res) => {
  const { characterId } = req.params;
  const singleCharacter = characters.find((character) => character.id === Number(characterId));
  if (!singleCharacter) {
    res.status(404).send("Character not available");
  }
  return res.json(singleCharacter);
});

router.get("/lookup", (req, res) => {
  const { search, limit } = req.query;
  let queriedCharacters = [...characters];
  if (search) {
    queriedCharacters = characters.filter((character) => {
      return character.name.startsWith(search);
    });
  }

  if (limit) {
    queriedCharacters.slice(0, Number(limit));
  }
  if (queriedCharacters < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(queriedCharacters);
});

module.exports = router;
