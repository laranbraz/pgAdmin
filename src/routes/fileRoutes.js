const express = require('express');
const { addFile, getAllFiles, deleteFile, updateFile } = require('../controllers/files/fileController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.post('/cadastro', checkPermission('administrador'), addFile);
router.get('/verificacao',checkPermission('moderador'), getAllFiles); // Moderador só consegue listar arquivos
router.delete('/:id', checkPermission('administrador'), deleteFile);
router.put('/:id', checkPermission('administrador'), updateFile)

module.exports = router;