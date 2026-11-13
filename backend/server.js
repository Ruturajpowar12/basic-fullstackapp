import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Dark Mode",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 2,
      title: "Array Indexing",
      content:
        "Why did the programmer quit his job? Because he didn't get arrays.",
    },
    {
      id: 3,
      title: "CSS Troubles",
      content:
        "Two CSS properties walk into a bar. A barstool in a completely different restaurant falls over.",
    },
    {
      id: 4,
      title: "SQL Query",
      content:
        "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
    },
    {
      id: 5,
      title: "Missing Semicolon",
      content:
        "A programmer's wife tells him, 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He comes home with 12 loaves of bread.",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`server at http://localhost:${PORT}`);
});
