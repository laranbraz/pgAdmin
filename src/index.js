require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');
const brypt = require('bcryptjs');
const prisma = require('./config/prismaConnection');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

// Importação das Rotas
const loginRoutes = require('./routes/loginRoutes'); //Login Usuário
const adminRegisterRoutes = require('./routes/adminRegisterRoutes'); //Registro de Administrador
const usersRoutes = require('./routes/usersRoutes'); //Usuários
const fileRoutes = require('./routes/fileRoutes'); //Arquivos
const positionRoutes = require('./routes/positionRoutes'); //Cargos
const serviceRoutes = require('./routes/serviceRoutes'); //Servicos
const systemRoutes = require('./routes/systemRoutes'); //Sistemas
const unitRoutes = require('./routes/unitRoutes'); //Unidades
const uploadedFilesRoutes = require('./routes/uploadedFilesRoutes'); //Uploads
const requireRoutes = require('./routes/requireRoutes'); //Requisições
const systemsManagementRoutes = require('./routes/systemsManagementRoutes'); //Gerenciamento de Sistema/Serviço/Cargo/Arquivo


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');

//Rota raiz para teste de API
app.get('/teste/servidor', (req, res) => {
    console.log('Request received at /');
    res.send('Servidor rodando com sucesso.');
  });

// Configuração das Rotas 
app.use('/admin', loginRoutes);
app.use('/admin', adminRegisterRoutes);
app.use('/admin/usuarios', authMiddleware, usersRoutes);
app.use('/admin/arquivos', authMiddleware, fileRoutes);
app.use('/admin/cargos', authMiddleware, positionRoutes);
app.use('/admin/servicos', authMiddleware, serviceRoutes);
app.use('/admin/sistemas', authMiddleware, systemRoutes);
app.use('/admin/unidades', authMiddleware, unitRoutes);
app.use('/admin/uploads', authMiddleware, uploadedFilesRoutes);
app.use('/admin/requisicoes', authMiddleware, requireRoutes);
app.use('/admin/gerenciamento', authMiddleware, systemsManagementRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });