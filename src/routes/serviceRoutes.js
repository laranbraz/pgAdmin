const express = require('express');
const { addService, getAllServices, deleteService, updateService } = require('../controllers/services/serviceController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.post('/cadastro', checkPermission('administrador'), addService);
router.get('/verificacao', checkPermission('moderador'), getAllServices);
router.delete('/:id', checkPermission('administrador'), deleteService);
router.put('/:id', checkPermission('administrador'), updateService)

module.exports = router;