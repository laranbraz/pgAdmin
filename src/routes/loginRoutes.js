const express = require('express');

const { loginUsuario } = require('../controllers/login/loginController');

const router = express.Router();

router.post('/', loginUsuario);

module.exports = router;