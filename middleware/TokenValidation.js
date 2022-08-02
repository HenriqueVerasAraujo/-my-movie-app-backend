const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenValidation = async(req, res, next) => {
    const token = req.header('token');
    const secret = process.env.JWT_SECRET;
    if (!token) {
        return res.json({errMessage4: 'Token not Found' });
    }
    try {
        const verifyToken = jwt.verify(token, secret);
        if (!verifyToken) {
            return res.json({errMessage4: 'Invalid Token'});
        }
        req.user = {
            userId: verifyToken.id,
        };
        next();
    } catch (err) {
    console.log(err);
    return res.json({errMessage4: 'Invalid Token'}) 
    }
}

module.exports = tokenValidation