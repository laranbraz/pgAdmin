const express = require('express');
const { addUnit, getAllUnits, deleteUnit, updateUnit } = require('../controllers/units/unitController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();


router.post('/cadastro', checkPermission('administrador'), addUnit);
router.get('/verificacao', checkPermission('moderador'), getAllUnits);
router.delete('/:id', checkPermission('administrador'), deleteUnit);
router.put('/:id', checkPermission('administrador'), updateUnit);


module.exports = router;