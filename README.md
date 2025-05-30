# formulario-nodejs-mysql

# 📋 Formulário com Node.js e MySQL

Este é um projeto simples de Formulário de Cadastro de Usuários, desenvolvido com Node.js, Express, MySQL, HTML e CSS. Ele permite que o usuário insira dados como **nome**, **e-mail**, **CPF** e **endereço**, e armazena essas informações em um banco de dados MySQL.

---

## 📋 Funcionalidades

- Entrada de nome, e-mail, CPF e endereço.
- Armazenamento dos dados em banco MySQL.
- Exibição de mensagens de sucesso ao cadastrar.
- Estrutura de rotas e backend com Express.
- Conexão e manipulação de dados com o MySQL.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **Express** – Framework web para Node.js.
- **MySQL** – Banco de dados relacional.
- **HTML/CSS** – Estrutura e estilização da interface.
- **Body-parser** – Middleware para tratar dados do formulário.

---

## 🚀 Como Executar o Projeto

### 1. Clone este repositório:

git clone https://github.com/amanda-oliv/formulario-nodejs-mysql.git
cd formulario-nodejs-mysql

### 2. Instale as dependências

npm install

### 3. Configure o banco de dados MySQL:
Crie um banco de dados chamado formulario_db.
Execute o seguinte script SQL:

CREATE DATABASE formulario_db;

USE formulario_db;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  cpf VARCHAR(14),
  endereco TEXT
);

Atualize as credenciais de conexão no arquivo db.js (usuário, senha, etc).

### 4. Inicie o servidor:

node app.js

### 5. Acesse o projeto:
Abra no navegador: http://localhost:3000

## ✨ Resultado Esperado
Ao acessar o sistema, você verá um formulário de cadastro. Após preenchê-lo e enviá-lo, os dados serão salvos no banco de dados MySQL, e uma mensagem de sucesso será exibida.
