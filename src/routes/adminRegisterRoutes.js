const express = require('express');
const { adminRegister } = require('../controllers/adminRegister/adminRegisterController');
const checkPermission = require('../middleware/checkPermissionMiddleware');


const router = express.Router();

router.post('/registro', checkPermission('administrador'), adminRegister);

module.exports = router;