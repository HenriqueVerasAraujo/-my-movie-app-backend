const { Router } = require('express');
const UsersController = require('../controllers/usersController');
const router = Router();

router.post('/', UsersController.createUser);

module.exports = router
