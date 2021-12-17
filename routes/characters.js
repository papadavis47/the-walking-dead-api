const express = require("express");
const router = express.Router();
const { postCharacter, getAllCharacters } = require("../controllers/characters.js");

// const { characters } = require("../data.js");

router.route("/").get(getAllCharacters).post(postCharacter);

// router.post("/api/v1/characters", (req, res) => {});

// router.get("/:characterId", (req, res) => {
//   const { characterId } = req.params;
//   const singleCharacter = characters.find((character) => character.id === Number(characterId));
//   if (!singleCharacter) {
//     res.status(404).send("Character not available");
//   }
//   return res.json(singleCharacter);
// });

module.exports = router;
