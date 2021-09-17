import express from "express";

const app = express();

const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is working!");
});

app.listen(PORT, () => console.log("The imports are working!"));
