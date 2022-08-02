const { Router } = require('express');
const ReviewController = require('../controllers/reviewsController');
const router = Router();

router.post('/create', ReviewController.createReview);

module.exports = router
