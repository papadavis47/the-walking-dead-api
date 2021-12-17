require("dotenv").config();

const express = require("express");
// const { characters } = require("./data.js");
const charactersRouter = require("./routes/characters.js");
const connectDB = require("./db/connect.js");
const app = express();

// Setting up the file to serve the landing page on the domain
app.use(express.static("./public"));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up my imported routes
app.use("/api/v1/characters", charactersRouter);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected now to DB!!!");
    app.listen(port, () => console.log(`Listening on http://localhost:${port}. Oh Yeah Baby!`));
  } catch (error) {
    console.log(error);
  }
};

start();
