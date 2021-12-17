const Character = require("../models/characters.js");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find({});
    res.status(200).json({ characters });
  } catch (error) {
    console.log(error);
  }
};

const postCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(200).json(character);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllCharacters, postCharacter };
