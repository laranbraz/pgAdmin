const express = require('express');
const { addPosition, getAllPositions, deletePosition, updatePosition } = require('../controllers/positions/positionController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.post('/cadastro', checkPermission('administrador'), addPosition);
router.get('/verificacao', checkPermission('moderador'), getAllPositions);
router.delete('/:id',checkPermission('administrador'), deletePosition);
router.put('/:id', checkPermission('administrador'), updatePosition);

module.exports = router;