const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/users/usersController');
const { addUser, updateUserStatus, changeUserPermission } = require('../controllers/users/usersManagementController');
const checkPermission = require('../middleware/checkPermissionMiddleware');

const router = express.Router();

router.get('/verificacao', checkPermission('moderador'), getAllUsers);
router.delete('/:id', checkPermission('administrador'), deleteUser);
router.post('/cadastro', checkPermission('administrador'), addUser);
router.patch('/:id/status', checkPermission('administrador'), updateUserStatus);
router.patch('/:id/permissao', checkPermission('administrador'), changeUserPermission);

module.exports = router;

