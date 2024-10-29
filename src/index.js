require("dotenv").config();
const express = require('express');

const usersRoutes = require('./routes/usersRoutes');

const app = express();
const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rota raiz para teste de API
app.get('/', (req, res) => {
    console.log('Request received at /');
    res.send('Servidor rodando com sucesso.');
  });

app.use('/admin/usuarios', usersRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });