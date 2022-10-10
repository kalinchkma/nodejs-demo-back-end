/**
 * Validate product info
 */

// external import
 const createError = require('http-errors');
 const { check } = require('express-validator');
 
 // internal imports
 const Product = require('../../models/Product');
 
 // check product info
 
 const productUpdateInfoVaildator = [
      // product id validate
      check('uid')
      .isString()
      .withMessage("User id must be a string")
      .trim()
      .custom( async (value) => {
            try {
                const product = await Product.findById({_id: value});
                if(product) {
                    return true;
                }
                throw createError("System busy!");
            } catch(err) {
                throw createError("System busy!");
            }
      }),
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
 
 
 module.exports = productUpdateInfoVaildator;
 
 
 
 