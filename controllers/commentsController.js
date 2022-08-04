const CommentService = require('../services/commentsService');

const createComment = async(req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
    try {  
        const newComment = await CommentService.createComment(req.body, Number(id), userId);
        return res.json(newComment);

    }catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

module.exports = {
    createComment,
}