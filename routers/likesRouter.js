const { Router } = require('express');
const LikeController = require('../controllers/likesController');
const tokenValidation = require('../middleware/TokenValidation');

const router = Router();

router.post('/:id', tokenValidation, LikeController.addLike);

module.exports = router;