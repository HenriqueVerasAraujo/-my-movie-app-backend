const { Review } = require('../models');
require('dotenv').config();

const createReview = async(body, movieId, userId) => {
    const { reviewBody, title, score } = body;
    const newReview = await Review.create({ reviewBody, title, score, movieId, userId });
    return newReview;
};

const getFromOne = async(movieId) => {
    const allReviews = await Review.findAll({ where: { movieId } });
    return allReviews;
};


module.exports = {
    createReview,
    getFromOne,
};
