const { Router } = require('express');
const ReviewController = require('../controllers/reviewsController');
const router = Router();
const tokenValidation = require('../middleware/TokenValidation');
const { titleValid, reviewBodyValid, scoreValid } = require('../middleware/newReviewValid');

router.post('/create/:id',
    tokenValidation,
    titleValid,
    reviewBodyValid,
    scoreValid,
    ReviewController.createReview
);
router.get('/:id', ReviewController.getFromOne);

module.exports = router;
