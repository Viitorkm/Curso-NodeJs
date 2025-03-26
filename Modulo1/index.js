const express = require("express");
const server = express();

server.use(express.json());

const cursos = ["JavaScript", "Node.js", "Npm"];

// Middleware Global
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  return next();
});

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso obrigatório" });
  }
  return next();
}

function checkId(req, res, next) {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= cursos.length) {
    return res.status(404).json({ error: "Curso não encontrado" });
  }
  req.cursoId = id; // Armazena o ID validado para uso posterior
  return next();
}

// Imprimir todos os cursos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

// Imprimir um curso específico
server.get("/cursos/:id", checkId, (req, res) => {
  return res.json({ CursoEscolhido: cursos[req.cursoId] });
});

// Criar um curso
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);
  return res.status(201).json(cursos);
});

// Editar um curso (substitui)
server.put("/cursos/:id", checkId, checkCurso, (req, res) => {
  const { name } = req.body;
  cursos[req.cursoId] = name;
  return res.json(cursos);
});

// Deletar um curso
server.delete("/cursos/:id", checkId, (req, res) => {
  cursos.splice(req.cursoId, 1);
  return res.json(cursos);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
