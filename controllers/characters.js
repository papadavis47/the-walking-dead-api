const Character = require("../models/characters.js");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find({});
    res.status(200).json({ characters });
  } catch (error) {
    console.log(error);
  }
};

const getSingleCharacter = async (req, res) => {
  try {
    const { id: characterID } = req.params;
    const character = await Character.findOne({ _id: characterID });
    res.status(200).json({ msg: "Got it!!!", character });
  } catch (error) {
    console.log(error);
  }
};

const updateCharacter = async (req, res) => {
  try {
    const { id: characterID } = req.params;
    const character = await Character.findOneAndUpdate({ _id: characterID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ msg: "Updated!!!", character });
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

const deleteCharacter = async (req, res) => {
  try {
    const { id: characterID } = req.params;
    const character = await Character.findOneAndDelete({ _id: characterID });
    res.status(200).json({ character: null, msg: "Gone! Walks among the dead!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCharacters,
  postCharacter,
  updateCharacter,
  getSingleCharacter,
  deleteCharacter,
};
