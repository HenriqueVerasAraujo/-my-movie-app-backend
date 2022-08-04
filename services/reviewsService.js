const { Review, User, Comment } = require('../models');
require('dotenv').config();

const createReview = async(body, movieId, userId) => {
    const { reviewBody, title, score } = body;
    const newReview = await Review.create({ reviewBody, title, score, movieId, userId });
    return newReview;
};

const getFromOne = async(movieId) => {
    const allReviews = await Review.findAll({ 
        where: { movieId },
        attributes: { exclude: '[updatedAt]'},
        order: [['id', 'DESC']],
        include: [
            {model: User, as: 'user', attributes: { exclude: ['id', 'email', 'password']}},
            {model: Comment, as: 'comments',
             attributes: { exclude: ['updatedAt', 'reviewId'] },
             order: [['id', 'DESC']]},
    ] });
    return allReviews;
};

const getOneReview = async(id) => {
    const myReview = await Review.findOne({
        where: { id },
        attributes: { exclude: '[updatedAt]'},
        include: [
            {model: User, as: 'user', attributes: { exclude: ['id', 'email', 'password']}},
            {model: Comment, as: 'comments',
             include: [{model: User, as: 'user', attributes: { exclude: ['id', 'email', 'password']}}],
             attributes: { exclude: ['updatedAt', 'reviewId'] },
             order: [['id', 'DESC']]},
        ] });
    return myReview;
}

const deleteReview = async(id) => {
    const deleteOne = await Review.destroy({where: { id }});
}

module.exports = {
    createReview,
    getFromOne,
    getOneReview,
    deleteReview,
};
