const UsersService = require('../services/usersService');

const createUser = async(req, res) => {
    try {  
        const newUser = await UsersService.createUser(req.body);
        return res.json(newUser);

    }catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
}

const login = async(req, res) => {
    try {  
        const newUser = await UsersService.login(req.body);
        return res.json(newUser);
        
    }catch (err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
}

module.exports = {
    createUser,
    login,
};