const LikeService = require('../services/likesService');

const addLike = async(req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    try { 
        const result = await LikeService.addLike(userId, id);
        return res.json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
}
module.exports = {
    addLike
}