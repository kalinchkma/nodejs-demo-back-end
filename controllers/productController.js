/**
 * Product controller
 */

const  Product = require('../models/Product');

// create product
exports.createProduct = async (req, res, next) => {
    const newProductOnject = req.body;
    const newProduct = new Product(newProductOnject);
    try {
        const result = await newProduct.save();
        return res.status(200).json(result);
    } catch(err) {
        return res.status(200).json({
            error: err.message
            
        });
    }
}

// update product by id
exports.updateProductById = async (req, res, next) => {
    try {
        await Product.findByIdAndUpdate({_id: req.body.uid}, {
            title: req.body.title,
            category: req.body.category,
            image: req.body.image,
            description: req.body.description,
            videoLink: req.body.videoLink
        });
        const updatedProduct = await Product.findById({_id: req.body.uid});
        return res.status(200).json(updatedProduct);
    } catch(err) {
        return res.status(500).json({
            error: err.message
        
        });
    }

}

// delete product by id
exports.deleteProductById = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete({_id: req.params.id});
        return res.status(200).json({
            message: "Product deleted successfully!",
        })
    } catch(err) {
        return res.status(500).json({
            error: err.message,
        });
    }
   
};

// get all product
exports.getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products)
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
}

// get product by Id 
exports.getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById({_id: req.params.id});
        return res.status(200).json(product)

    } catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

