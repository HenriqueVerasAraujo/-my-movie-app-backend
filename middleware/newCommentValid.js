const bodyValid = (req, res, next) => {
    const { commentBody } = req.body;
    try {
        if (commentBody.length < 3 || commentBody.length > 500) {
            return res.json({errMessage1: 'The comment must be 4-500 characters long.'});
        }
        return next();
    } catch (err) {
        console.log(err);
        return res.json({error: err});
    }
};

module.exports = {
    bodyValid,
}