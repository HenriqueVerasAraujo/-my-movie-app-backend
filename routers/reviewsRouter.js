const { Router } = require('express');
const ReviewController = require('../controllers/reviewsController');
const router = Router();
const tokenValidation = require('../middleware/TokenValidation');

router.post('/create/:id', tokenValidation, ReviewController.createReview);

module.exports = router
