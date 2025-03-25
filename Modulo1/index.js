const express = require("express");

const server = express();

server.get("/cursos", (req, res) => {
  return res.end("Hello Word");
});

server.listen(3000);
