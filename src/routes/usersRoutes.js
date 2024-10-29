const express = require('express');
const { getAllUsers, deleteUser, addUser } = require('../controllers/users/usersController');

const router = express.Router();

router.get('/verificacao', getAllUsers);
router.delete('/:id', deleteUser);
router.post('/cadastro', addUser);


module.exports = router;