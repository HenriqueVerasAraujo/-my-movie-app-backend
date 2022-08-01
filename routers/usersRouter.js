const { Router } = require('express');
const UsersController = require('../controllers/usersController');
const { passwordValid, emailValid, usernameValid } = require('../middleware/newUserbodyValid');
const router = Router();

router.post('/create', usernameValid, emailValid, passwordValid, UsersController.createUser);
router.post('/login', UsersController.login);

module.exports = router
