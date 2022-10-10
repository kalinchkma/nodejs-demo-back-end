/**
 * productListUpdateInfoValidator
 */

const createError = require('http-errors');

const {check} = require('express-validator');


// internal import
const ProducList = require("../../models/ProductList");


// check update info
const productListUpdateInfoValidator = [
    check('uid')
    .isString()
    .withMessage("Product list id must be a string")
    .escape()
    .custom(async (value) => {
        try {
            const productList = await ProducList.findById({_id: value});
            if(productList){
                return true;
            }
            throw createError("System busy cannot perform operation");
        } catch(err) {
            throw createError("System busy cannot perform operation!");
        }
    }),
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
]


module.exports = productListUpdateInfoValidator;
