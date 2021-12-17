// This is very similar to the "seed" files that I never understood in cohort

require("dotenv").config();
const connectDB = require("./db/connect.js");
const Character = require("./models/characters.js");

const jsonCharacters = require("./characters.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Character.create(jsonCharacters);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
