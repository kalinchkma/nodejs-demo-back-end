/**
 * User schema
 */
//external imports
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    userType: {
        type: String,
        enum: ['admin', 'buyer', 'seller'],
        default: "buyer"
    }
}, {
    timestamps: true
});



module.exports = userSchema;

