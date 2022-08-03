

const titleValid = (req, res, next) => {
    const { title } = req.body;
    try {
        if(!title) {
            return res.json({errMessage1: 'Title is required and must be 3-60 characters long.'});
        }
        if (title.length < 3 || title.length > 60) {
            return res.json({errMessage1: 'Title must be 4-60 characters long.'});
        }
        return next();
    } catch (err) {
        console.log(err);
        return res.json({error: err});
    }
};

const reviewBodyValid = (req, res, next) => {
    const { reviewBody } = req.body;
    try {
        if(!reviewBody) {
            return res.json({errMessage2: 'The review is required and must be 3-1000 characters long.'});
        }
        if (reviewBody.length < 3 || reviewBody.length > 1000) {
            return res.json({errMessage2: 'The review must be 3-1000 characters long.'});
        }
        return next();
    } catch (err) {
        console.log(err);
        return res.json({error: err});
    }
};

const scoreValid = (req, res, next) => {
    const { score } = req.body;
    try {
        if (score === 'N/A' || score < 0 || score > 10) {
            return res.json({errMessage3: 'You need to rate the movie from 0 to 10.'});
        };
        return next();
    } catch (err) {
        console.log(err);
        return res.json({error: err});
    }
};

module.exports = {
    titleValid,
    reviewBodyValid,
    scoreValid,
}