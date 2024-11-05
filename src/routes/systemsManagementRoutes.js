const express = require('express');
const { addSystemServicePositionFile } = require('../controllers/systemsManagement/systemsManagementController')
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.post('/sistema-servico-cargo-arquivo', checkPermission('administrador'), addSystemServicePositionFile);

module.exports = router;