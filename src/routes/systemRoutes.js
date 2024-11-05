const express = require('express');
const { addSystem, getAllSystems, deleteSystem, updateSystem } = require('../controllers/system/systemController')
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.post('/cadastro', checkPermission('administrador'), addSystem);
router.get('/verificacao', checkPermission('moderador'), getAllSystems);
router.delete('/:id', checkPermission('administrador'), deleteSystem);
router.put('/:id', checkPermission('administrador'), updateSystem);

module.exports = router;