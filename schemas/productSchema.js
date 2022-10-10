/**
 * product model
 */
// external imports
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    videoLink: {
        type: String
    },
    status: {
        type: String,
        enum: ["open", "close"],
        default: "open"
    },
    description: {
        type:[String],
        required: true
    }
}, {
    timestamps: true
});



module.exports = productSchema;

