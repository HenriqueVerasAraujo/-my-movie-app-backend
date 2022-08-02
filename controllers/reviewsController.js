const ReviewService = require('../services/reviewsService');

const createReview = async(req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
    try {  
        const newUser = await ReviewService.createReview(req.body, id, userId);
        return res.json(newUser);

    }catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

const getFromOne= async(req, res) => {
    const { id } = req.params;
    try {  
        const allReviews = await ReviewService.getFromOne(id);
        return res.json(allReviews);

    }catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
}

module.exports = {
    createReview,
    getFromOne,
}