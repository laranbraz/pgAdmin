const express = require('express');
const { addFile, getAllFiles, deleteFile, updateFile } = require('../controllers/files/fileController');

const router = express.Router();

router.post('/cadastro', addFile);
router.get('/verificacao', getAllFiles);
router.delete('/:id', deleteFile);
router.put('/:id', updateFile)

module.exports = router;