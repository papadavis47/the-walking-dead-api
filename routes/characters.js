const express = require("express");
const router = express.Router();
const {
  postCharacter,
  getAllCharacters,
  updateCharacter,
  getSingleCharacter,
  deleteCharacter,
} = require("../controllers/characters.js");

router.route("/").get(getAllCharacters).post(postCharacter);
router.route("/:id").get(getSingleCharacter).patch(updateCharacter).delete(deleteCharacter);

module.exports = router;
