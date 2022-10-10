/**
 * ProductList Controller
 */

// internal imports
const ProducList = require('../models/ProductList');


// create product list
exports.createProductList = async (req, res, next) => {
    const newProductListObject = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category
    }

    const newProductList = new ProducList(newProductListObject);

    try {  
        const result = await newProductList.save();
        return res.status(200).json(result);
    } catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

// update product by id
exports.updateProductListById = async (req, res, next) => {
    try {
        await ProducList.findByIdAndUpdate({_id: req.body.uid}, {
            title: req.body.title,
            price: req.body.price,
            category: req.body.category
        });

        const updatedProductList = await ProducList.findById({_id: req.body.uid});
        return res.status(200).json(updatedProductList);

    } catch(err) {

        return res.status(500).json({
            error: err.message
        });
    }
}

// delete product list by id
exports.deleteProductListById = async (req, res, next) => {
    try {
        await ProducList.findByIdAndDelete({_id: req.params.id})
        return res.status(200).json({
            message: "Product List deleted successfully"
        })
    } catch(err) {
        return res.status(500).json({
            error: err.message
        });
    }
}

// get all product list 
exports.getAllProductList = async (req, res, next) => {
    try {
        const productList = await ProducList.find();
       
        return res.status(200).json(productList);
    } catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
}


// get product list by id
exports.getProductListById = async (req, res, next) => {
    try {
        const productList = await ProducList.findById({_id: req.params.id});
        return res.status(200).json(productList);
    } catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

