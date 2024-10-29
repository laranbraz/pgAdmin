const express = require('express');
const { getAllRequires, deleteRequire } = require('../controllers/requires/requireController');

const router = express.Router();

router.get('/verificacao', getAllRequires);
router.delete('/:id', deleteRequire);

module.exports = router;