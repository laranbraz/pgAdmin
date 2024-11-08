const express = require('express');
const { adminRegister } = require('../controllers/adminRegister/adminRegisterController');


const router = express.Router();

router.post('/registro', adminRegister);

module.exports = router;