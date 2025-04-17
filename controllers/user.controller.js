const UserService = require('../services/user.service');

exports.register = async (req, res, next) => {
    try{
        const {username, email, password } = req.body;
        const user = await UserService.registerUser({username, email, password});
        res.status(201).json({status: true, message: 'User registered successfully', user });
    }catch(err){
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
}

exports.login = async (req, res, next) => {
    try{
        const {username, email, password } = req.body;

        const user = await UserService.checkUser(email);
        console.log("User:", user);
        if(!user){
            return res.status(401).json({status: false, message: 'User not found'});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({status: false, message: 'Incorrect password'});
        }
        // Generate JWT token
        let tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        } 

        const token = await UserService.generateToken(tokenData, 'secretKey', '1m'); //process.env.JWT_SECRET

        res.status(200).json({status: true, token: token, message: 'User logged in successfully', user: tokenData });
       
    }catch(err){
        res.status(500).json({ message: 'Error login user', error: err.message });
    }
}