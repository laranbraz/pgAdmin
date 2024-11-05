const express = require('express');
const { getAllRequires, deleteRequire } = require('../controllers/requires/requireController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.get('/verificacao', checkPermission('moderador'), getAllRequires);
router.delete('/:id', checkPermission('administrador'), deleteRequire);

module.exports = router;