/**
 * Validate product info
 */


const createError = require('http-errors');
const { check } = require('express-validator');


// check product info

const productInfoValidator = [
  
    // validate title
    check('title')
    .isString()
    .withMessage("Product Title must be a string").trim().escape(),

    // validate categoru
    check('category')
    .isString()
    .withMessage("Product category must be a string").trim().escape(),

    // validate description
    check('description')
    .isArray()
    .withMessage("Product Description must ne list or option"),
    
    // check video link
    check('videoLink')
    .isURL()
    .withMessage("Invalid video link")
];


module.exports = productInfoValidator;



