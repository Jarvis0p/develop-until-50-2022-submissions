const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cart: [{
        product: String,
        rating: String,
        price: Number
    }],
    sellerType: {
        type: String,
        default:"customer"
    }
})

module.exports = mongoose.model('user', userSchema);