/**
 * Title: users routes
 */

// external imports
const express = require('express');

// internal imports
const {
    getUserAll,
    getUserById,
    postSignUpUser,
    deleteUserById,
    updateUserById,
    updateUserTypeById
} = require("../controllers/userController");


// user input validation 
const {
    userInputsValidator,
    userUpdateValidator,
    userParamIdValidator,
    userUpdateTypeValidator
} = require('../middleware/users/index');

const validationErrorHandler = require('../middleware/common/validationErrorHandler');

const router = express.Router();

// creat/signup user 
router.post('/signup', userInputsValidator, validationErrorHandler, postSignUpUser);

// update user by id
router.put("/",userUpdateValidator, validationErrorHandler, updateUserById);

// delete user
router.delete("/:id", userParamIdValidator, validationErrorHandler, deleteUserById);

// get all user
router.get("/", getUserAll);

// get user by id
router.get('/:id', userParamIdValidator, validationErrorHandler, getUserById);

// update user type by id
router.put('/:id', userParamIdValidator, userUpdateTypeValidator, validationErrorHandler, updateUserTypeById);







module.exports = router;