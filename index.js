const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "I am Xavier!" });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`\n ***Server running on port ${PORT} ***\n`);
});
