const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'seller'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    productType: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: Date.now
    },
    quantity: {
        type: Number,
        default: "seller"
    }
})

module.exports = mongoose.model('product', productSchema);