const express = require('express');
const { addPosition, getAllPositions, deletePosition, updatePosition } = require('../controllers/positions/positionController');

const router = express.Router();

router.post('/cadastro', addPosition);
router.get('/verificacao', getAllPositions);
router.delete('/:id', deletePosition);
router.put('/:id', updatePosition);

module.exports = router;