const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

// Conexão com o banco de dados
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'formulario'
});

conexao.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos estáticos (como index.html)
app.use(express.static(__dirname));

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para processar o formulário
app.post('/enviar', (req, res) => {
  const { nome, email, cpf, endereco } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, cpf, endereco) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome, email, cpf, endereco], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao salvar dados.');
    } else {
      console.log('Dados salvos com sucesso!');
      res.redirect('/sucesso.html');
    }
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});