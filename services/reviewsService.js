const { Review } = require('../models');
require('dotenv').config();

const createReview = async(body, movieId, userId) => {
    const { reviewBody, title, score } = body;
    const newReview = await Review.create({ reviewBody, title, score, movieId, userId });
    return newReview;
};
const getFromOne = async(body, movieId, userId) => {
    const { reviewBody, title, score } = body;
    const newReview = await Review.create({ reviewBody, title, score, movieId, userId });
    return newReview;
}


module.exports = {
    createReview
    getFromOne
};
