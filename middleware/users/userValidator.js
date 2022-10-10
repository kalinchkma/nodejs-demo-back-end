/**
 * user validator
 */

// external imports
const { check, validationResult } = require('express-validator');
const createError = require('http-errors');

// internal imports
const User = require('../../models/User');

// check user inputs
const userInputsValidator = [
    // check user name
    check('name')
    .isLength({min: 1})
    .withMessage("Name is required")
    .isAlpha('en-US', {ignore: " "})
    .withMessage("Name must not contain anything other than alphbet")
    .trim(),
    // validate user name
    check('username')
    .isLength({min: 4})
    .withMessage("Username is too short")
    .trim()
    .custom( async (value) => {
        try {
            const user = await User.findOne({ username: value });
            if(user) {
                throw createError("Username already in use!");
            } else {
                return true;
            }

        } catch(err) {
            throw createError(err.message);
        }
    }),
    // validate email
    check('email')
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
        try {
            const user = await User.findOne({email: value});
            if(user) {
                throw createError("Email already in use!");
            } else {
                return true;
            }
        } catch(err) {
            throw createError(err.message);
        }
    }),
    // validate password
    check('password')
    .isStrongPassword()
    .withMessage("Password must be at least 8 character long & should contain at least 1 lowercase, 1 uppercase, 1 number & Symbol"),
      // validate mobile number
      check('phone')
      .isMobilePhone('bn-BD', {
          strictMode: true
      })
      .withMessage("Mobile number must be a valid Bangladesh mobile number"),

];





module.exports = userInputsValidator;
