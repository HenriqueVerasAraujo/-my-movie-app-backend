const usernameValid = (req, res, next) => {
    const { username } = req.body;
    if(!username) {
        return res.json({errMessage1: 'Username is required and must be at least 4 characters long.'});
    }
    if (username.length < 4) {
        return res.json({errMessage1: 'Username must be at least 4 characters long.'});
    }
    next();
};

const passwordValid = (req, res, next) => {
    const { password } = req.body;
    if(!password) {
        return res.json({errMessage3: 'Password is required and must be at least 6 characters long.'});
    }
    if (password.length < 6) {
        return res.json({errMessage3: 'Password must be at least 6 characters long.'});
    }
    next();
};

const emailValid = (req, res, next) => {
    const { email } = req.body;
    if(!email) {
        return res.json({errMessage2: 'Email is required and must be a valid email.'});
    }
    if (!email.includes('@') || !email.includes('.com')) {
        return res.json({errMessage2: 'Email must be a valid email.'});
    }
    next();
};

module.exports = {
    usernameValid,
    passwordValid,
    emailValid,
}