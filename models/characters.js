const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Name Must Be Provided"],
  },
  shortDescription: {
    type: String,
    required: [true, "Must provide a one sentence description"],
  },
  playedBy: {
    type: String,
    required: [true, "Must Name Actor Who Played Character"],
  },
  seasonOfArrival: {
    type: Number,
    required: [true, "Must Input Which Season Character Appeared"],
  },
  seasonOfDeath: {
    type: Number,
  },
  isVillain: {
    type: Boolean,
    default: false,
  },
  weaponOfChoice: {
    type: String,
  },
});

module.exports = mongoose.model("Character", characterSchema);
