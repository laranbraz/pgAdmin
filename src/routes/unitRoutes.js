const express = require('express');
const { addUnit, getAllUnits, deleteUnit, updateUnit } = require('../controllers/units/unitController');

const router = express.Router();


router.post('/cadastro', addUnit);
router.get('/verificacao', getAllUnits);
router.delete('/:id', deleteUnit);
router.put('/:id', updateUnit);


module.exports = router;