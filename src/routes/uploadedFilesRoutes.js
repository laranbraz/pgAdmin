const express = require('express');
const router = express.Router();
const multer = require('multer');
const {recuperarArquivo} = require('../controllers/uploadedFiles/uploadedFileController');


router.get('/:id', recuperarArquivo);


module.exports = router;