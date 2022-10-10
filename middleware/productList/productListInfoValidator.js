/**
 * productListInfoValidator 
 */

const createError = require('http-errors');
const { check } = require("express-validator");


// check product list info
const productListInfoValidator = [
    // validate title
    check('title')
    .isString()
    .withMessage("Title must be a string")
    .isLength({max: 100, min: 1})
    .withMessage("Title must be at most 50 characters").trim(),
    // validate price
    check('price')
    .isString()
    .withMessage("Price Invalid")
    .isLength({min: 1, max: 100})
    .withMessage("Invalid price").trim(),
    // category
    check('category')
    .isString()
    .withMessage("Category must be a string")
    .isLength({min: 1, max: 100})
    .withMessage("Category must be at most 100 characters").trim(),

];



module.exports =productListInfoValidator






