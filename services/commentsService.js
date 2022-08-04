const { Comment } = require('../models');
require('dotenv').config();

const createComment = async(body, reviewId, userId) => {
    const { commentBody } = body;
    const newReview = await Comment.create({ commentBody, reviewId, userId });
    return newReview;
};

module.exports = {
    createComment,
};
