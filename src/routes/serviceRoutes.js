const express = require('express');
const { addService, getAllServices, deleteService, updateService } = require('../controllers/services/serviceController');

const router = express.Router();

router.post('/cadastro', addService);
router.get('/verificacao', getAllServices);
router.delete('/:id', deleteService);
router.put('/:id', updateService)

module.exports = router;