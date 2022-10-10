const express = require('express');
const router = express.Router();
const fetchSeller = require('../middleware/fetchSeller');
const Product = require('../models/Product');

// ROUTE 1: get all the notes using GET "product/fetchallproducts" Login required
router.get('/fetchallproducts',  async (req,res)=>{
    Product.find({}, function (err, products) {
        var productMap = {};

        products.forEach(function (product) {
            productMap[product._id] = product;
        });

        res.send(productMap);
    });
})




module.exports = router;