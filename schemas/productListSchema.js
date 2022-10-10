/**
 * product list schema
 */

const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["open", "close"],
        default: "open"
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports = productListSchema;
