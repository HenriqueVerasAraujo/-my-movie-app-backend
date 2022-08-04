const { Router } = require('express');
const CommentsController = require('../controllers/commentsController');
const TokenValidation = require( '../middleware/TokenValidation');
const { bodyValid } = require('../middleware/newCommentValid');


const router = Router();

router.post('/create/:id', TokenValidation, bodyValid, CommentsController.createComment);

module.exports = router
