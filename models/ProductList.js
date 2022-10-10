/**
 * ProductList medel
 */
// external model
const mongoose = require('mongoose');

// internal model
const productListSchema = require("../schemas/productListSchema");

const ProductList = mongoose.model('ProductList', productListSchema);


module.exports = ProductList;

