const { Router } = require('express');
const CommentsController = require('../controllers/commentsController');
const TokenValidation = require( '../middleware/TokenValidation');


const router = Router();

router.post('/create/:id', TokenValidation, CommentsController.createComment);

module.exports = router
