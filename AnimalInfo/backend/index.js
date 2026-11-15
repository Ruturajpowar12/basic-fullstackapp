import express, { json } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Animal Info");
});

app.get("/api/dogs", (req, res) => {
  async function getData() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = response.json();
  }
  res.send(getData());
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
