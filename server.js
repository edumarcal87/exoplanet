const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de tratamento de erro para 404
app.use((req, res, next) => {
  res.status(404).send('Arquivo não encontrado!');
});

// Middleware de tratamento de erro geral
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
  console.log(`App rodando em: http://localhost:${port}`);
});
