const { User } = require('../models');

const createUser = async(body) => {
    const { username, password, email } = body;
    const findEmail = await User.findOne({ where: { email } });
    const findUser = await User.findOne({ where: { username } });
    if (findUser) {
        return {errMessage1: 'Username already in use.'}
    }
    if (findEmail) {
        return {errMessage2: 'Email already in use.'}
    }
    const newUser = await User.create({username, password, email});
    return newUser;
};

module.exports = {
    createUser,
}