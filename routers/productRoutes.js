/**
 * Title: users routes
 */

// external imports
const express = require('express');

// internal imports
const {
    createProduct,
    deleteProductById,
    getAllProduct,
    getProductById,
    updateProductById
} = require('../controllers/productController');

// validator imports
const {
    productInfoValidator,
    productUpdateInfoVaildator,
    productParamIdValidor
}  = require('../middleware/product/index');

const validationErrorHandler = require('../middleware/common/validationErrorHandler');

// router creation
const router = express.Router();



// create roduct
router.post("/", productInfoValidator, validationErrorHandler, createProduct);

// update product by id
router.put("/", productUpdateInfoVaildator, validationErrorHandler, updateProductById);

// delele product by id
router.delete("/:id", productParamIdValidor, validationErrorHandler, deleteProductById);

// get all product
router.get("/", getAllProduct);

// get product by Id
router.get("/:id", productParamIdValidor, validationErrorHandler, getProductById);



module.exports = router;