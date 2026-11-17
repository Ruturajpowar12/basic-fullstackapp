import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(json());

app.get("/", (req, res) => {
  res.send("Animal Info");
});

app.get("/api/dogs", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
