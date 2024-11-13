const express = require('express');
const { getAllSystemServicePosition } = require('../controllers/serviceSystem/serviceSystemPositionController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.get('/verificacao', checkPermission('moderador'), getAllSystemServicePosition);


module.exports = router;