const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(username, email, password) {
        try{
            const createUser = new UserModel(username, email, password);
            return await createUser.save();
        }catch(err){
            throw new Error('Error creating user: ' + err.message);
        }
    }

    static async checkUser(email) {
        try{
            return await UserModel.findOne({ email });
        } catch(err){
            throw new Error('Error checking user: ' + err.message);
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire) {
        return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
    }

}

module.exports = UserService;