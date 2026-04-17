const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bank backend running");
});

app.get("/api/accounts", (req, res) => {
  res.json([
    { id: 1, name: "Nikhil", balance: 5000 },
    { id: 2, name: "Madhu", balance: 7000 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});