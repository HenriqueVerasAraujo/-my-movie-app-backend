const { Like } = require('../models')

const addLike = async(userId, reviewId) => {
    const findLike = await Like.findOne({ where: { userId, reviewId }});
    if (findLike) {
         await Like.destroy({ where: { userId, reviewId } });
         return 'Like deleted'
    } else {
        await Like.create({ userId, reviewId });
        return 'Like created'
    }
}

module.exports = {
    addLike
}