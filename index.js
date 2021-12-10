const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is working!");
});

app.listen(PORT, () => console.log("The imports are working!"));
