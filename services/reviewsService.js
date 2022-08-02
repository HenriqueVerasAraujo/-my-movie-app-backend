const { Review, User } = require('../models');
require('dotenv').config();

const createReview = async(body, movieId, userId) => {
    const { reviewBody, title, score } = body;
    const newReview = await Review.create({ reviewBody, title, score, movieId, userId });
    return newReview;
};

const getFromOne = async(movieId) => {
    const allReviews = await Review.findAll({ where: { movieId },
        attributes: { exclude: '[id, updatedAt]'}, 
        include: [
            {model: User, as: 'user', attributes: { exclude: ['id', 'email', 'password', ]}}
    ] });
    return allReviews;
};


module.exports = {
    createReview,
    getFromOne,
};
