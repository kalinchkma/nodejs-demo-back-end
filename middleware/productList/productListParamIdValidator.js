/**
 * productParamIdValidator
 */
// external imports
const { param } = require('express-validator');
const createError = require('http-errors');

// internal imports
const ProducList = require('../../models/ProductList');

// validate user params id
const productListParamIdValidator = [
    param('id')
    .isString()
    .withMessage("productList Id must be a string")
    .escape()
    .custom( async (value) => {
        try {
            const productList = await ProducList.findById({_id: value});
            if(productList) {
                return true;
            }
            throw createError("System busy cannot perform the operations");
        } catch(err) {
            throw  createError('System busy cannot perform the operations!');
        }
    })
]

module.exports = productListParamIdValidator;



