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
        required: true
    },
    quantity: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('product', productSchema);