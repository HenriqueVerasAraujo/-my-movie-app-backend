const { User } = require('../models');

const createUser = async(body) => {
    const {username, password, email} = body;
    const newUser = await User.create({username, password, email});
    return newUser;
};

module.exports = {
    createUser,
}