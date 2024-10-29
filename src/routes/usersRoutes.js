const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/users/usersController');

const router = express.Router();

router.get('/verificacao', getAllUsers);
router.delete('/:id', deleteUser);


module.exports = router;