import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("This is working!");
});

app.listen(PORT, () => console.log("The imports are working!"));
