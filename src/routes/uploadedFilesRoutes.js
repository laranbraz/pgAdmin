const express = require('express');
const router = express.Router();
const multer = require('multer');
const {recuperarArquivo} = require('../controllers/uploadedFiles/uploadedFileController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

router.get('/:id', checkPermission('moderador'), recuperarArquivo);


module.exports = router;