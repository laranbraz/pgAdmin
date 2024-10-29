const express = require('express');
const { addSystem, getAllSystems, deleteSystem, updateSystem } = require('../controllers/system/systemController')

const router = express.Router();

router.post('/cadastro', addSystem);
router.get('/verificacao', getAllSystems);
router.delete('/:id', deleteSystem);
router.put('/:id', updateSystem);

module.exports = router;