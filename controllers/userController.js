/**
 * Title: user controller
 */
// external imports
const createError = require('http-errors');
const bcrypt = require('bcrypt');

// internal imports
const User = require('../models/User');



// signup user
exports.postSignUpUser = async (req, res, next) => {
   
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
 
        const newUserObject = {
             ...req.body,
             password: hashedPassword
        };
        const newUser = new User(newUserObject);
        const result = await newUser.save();
        return res.status(200).json(result);
    } catch(err) {
         res.status(500).json({
            error: err.message
         });
    }
 
 }
 

// update user by id
exports.updateUserById = async (req, res, next) => {
    try {
        // update user
        await User.findByIdAndUpdate({_id: req.body.uid},{
            name: req.body.name,
            phone: req.body.phone
        });
        const updatedUser = await User.findById({_id: req.body.uid});
        return res.status(200).json(updatedUser);
    } catch(err) {
        return res.status(500).json({
            error: err.message,
            
        });
    }

}

// delete user by id
exports.deleteUserById = async (req, res, next) => {
    const uid = req.params.id
    try {
        await User.findByIdAndDelete({_id: uid});
        return res.status(200).json({
            message: "Users Deleted sussefully"
        });
    } catch(err) {
        return res.status(500).json({
            error: err.message,
        });
    }
    
}

// get all user
exports.getUserAll = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
     
    } catch(err) {
        return res.status(400).json({
            error: err.message,
        });
    }

}

// get user by id
exports.getUserById = async (req, res, next) => {
    const uid = req.params.id;
    try {
        const user = await User.findById({_id: uid});
        return res.status(200).json(user);
    } catch(err) {
        return res.status(500).json({
            error: err.message
        });
    }

}


// update user type
exports.updateUserTypeById = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate({_id: req.params.id}, {
            userType: req.body.userType
        });
        const updatedUser = await User.findById({_id: req.params.id});
        return res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(200).json({
            error: err.message
        });
    }
    
}

