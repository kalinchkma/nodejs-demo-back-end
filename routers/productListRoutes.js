/**
 * ProducList router
 */
// external imports
const express = require('express');

// internal imports
const {
    createProductList,
    deleteProductListById,
    getAllProductList,
    getProductListById,
    updateProductListById
} = require("../controllers/productListController");

// validator
const {
    productListInfoValidator,
    productListParamIdValidator,
    productListUpdateInfoValidator
} = require("../middleware/productList/index");

const validationErrorHandler = require('../middleware/common/validationErrorHandler');

// initalize router
const router = express.Router();

// create product list
router.post("/", productListInfoValidator, validationErrorHandler, createProductList);

// update product list by id
router.put("/",productListUpdateInfoValidator, validationErrorHandler, updateProductListById);

// delete product list by id
router.delete("/:id",productListParamIdValidator, validationErrorHandler, deleteProductListById);

// get all product list
router.get("/", getAllProductList);

// get product list by id
router.get("/:id",productListParamIdValidator, validationErrorHandler, getProductListById);


module.exports = router;