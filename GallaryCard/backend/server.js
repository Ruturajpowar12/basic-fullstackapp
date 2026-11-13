import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    },
    {
      id: 2,
      name: "Priya Patel",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    },
    {
      id: 3,
      name: "Rohan Verma",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 4,
      name: "Ananya Iyer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    },
    {
      id: 5,
      name: "Kabir Mehta",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
    {
      id: 6,
      name: "Neha Kulkarni",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    },
    {
      id: 7,
      name: "Vikram Singh",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150",
    },
    {
      id: 8,
      name: "Sneha Das",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    },
    {
      id: 9,
      name: "Aditya Nair",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    },
    {
      id: 10,
      name: "Pooja Joshi",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150",
    },
  ];
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
