const express = require('express');
const router = express.Router();
const fetchSeller = require('../middleware/fetchSeller');
const Product = require('../models/Product');

// ROUTE 1: get all the notes using GET "product/fetchallproducts" Login required
router.get('/fetchallproducts' ,fetchSeller,  async (req,res)=>{
    serllerID = req.seller.id;
    const notes = await Note.find({
        seller: sellerID
    });
    res.json(products);
})


// ROUTE 1: get all the notes using GET "product/addproduct" Login required

router.post('/addproduct', fetchSeller, async (req, res) => {

    try {
        const {
            name,
            price,
            productType,
            category,
            quantity
        } = req.body;

        // if any empty property remains
        if (!name ||
            !price || 
            !productType || 
            !category || 
            !quantity) {
            return res.status(404).json({
                error: "please fill the property"
            });
        }

        const product = new Product({
               name,
               price,
               productType,
               category,
               quantity,
            seller: req.seller.id
        });
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error");
    }

})

module.exports = router;