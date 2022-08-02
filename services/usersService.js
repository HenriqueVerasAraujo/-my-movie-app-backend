const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createUser = async(body) => {
    const { username, password, email } = body;
    const hashPassword = await bcrypt.hash(password, 10)
    const findEmail = await User.findOne({ where: { email } });
    const findUser = await User.findOne({ where: { username } });
    if (findEmail) {
        return {errMessage2: 'Email already in use.'}
    }
    if (findUser) {
        return {errMessage1: 'Username already in use.'}
    }
    const newUser = await User.create({username, password: hashPassword, email});
    return {message: 'User created'};
};

const login = async(body) => {
    const { email, password } = body;
    if (!email) {
        return { errMessage2: 'Email must be a valid email.' };
    }
    const findEmail = await User.findOne({ where: { email } });
    if (!findEmail) {
        return { errMessage2: 'Email not found.' };
    }
    const comparePass = await bcrypt.compare(password, findEmail.password);
    if (!comparePass) {
        return {errMessage3: 'Invalid Password.'};
    }
    return { 
        id: findEmail.id,
        username: findEmail.username,
        token: jwt.sign({ id: findEmail.id, username: findEmail.username }, secret) };
}

module.exports = {
    createUser,
    login,
}