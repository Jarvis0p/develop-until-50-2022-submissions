const express = require('express');
const router = express.Router();
const Seller = require("../models/Seller");
const bcrypt = require('bcryptjs');
const fetchSeller = require('../middleware/fetchSeller');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
const JWT_secret = process.env.JWT_SECRET;
const Product = require('../models/Product');

dotenv.config({
    path: __dirname + '../config.env'
});


// ROUTE : get all the notes using GET "seller/fetchallproducts" Login required
router.get('/fetchallproducts', fetchSeller, async (req, res) => {
    sellerID = req.seller.id;
    const product = await Product.find({
        seller: sellerID
    });
    res.json(product);
})


// ROUTE : get all the notes using GET "seller/addproduct" Login required

router.post('/addproduct', fetchSeller, async (req, res) => {

    try {
        console.log(req.body);
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


// Route- for creating user
router.post('/signup', async (req, res) => {

    let success = "out";

    try {
        const {
            name,
            email,
            password,
        } = req.body

        // if any empty property remains
        if (!name || !email || !password) {
            return res.status(404).json({
                success,
                error: "please filled the credentials"
            });
        }
        // checking whether user exist
        const sellerExist = await Seller.findOne({
            email: email
        })
        if (sellerExist) return res.status(422).json({
            success,
            error: "Seller Already Exist"
        })

        // if not exist then creating new user
        const seller = new Seller({
            name,
            email: email.toLowerCase(),
            password
        })
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        seller.password = await bcrypt.hash(seller.password, salt);

        const data = {
            seller: {
                id: seller._id
            }
        }
        const authtoken = jwt.sign(data, JWT_secret);
        // console.log(authtoken);
        await seller.save();
        success = "in";
        res.status(201).json({
            success,
            message: "Seller registered successfully"
        })

    } catch (error) {
        console.log(error);
    }

})


// Route-  login
router.post('/login', async (req, res) => {
    let success = "out";
    const {
        email,
        password
    } = req.body;

    try {
        if (!email || !password) {
            return res.status(422).json({
                error: "Please fill the credentials"
            });
        }

        const seller = await Seller.findOne({
            email: email
        })
        if (seller) {
            // console.log(password + " " + seller);
            const validPassword = await bcrypt.compare(password, seller.password);
            if (validPassword) {
                const data = {
                    seller: {
                        id: seller._id
                    }
                }
                const authtoken = jwt.sign(data, JWT_secret);
                // console.log(authtoken);
                success = "in";
                res.status(200).json({
                    success,
                    message: "Login Successfully",
                    authtoken
                })
            } else {
                 return res.status(400).json({
                    success,
                    error: "Wrong credentials"
                })
            }
        }else{
             return res.status(400).json({
                success,
                message: "Wrong credentials"
            });
        }
    } catch (error) {
        console.log(error);
    }
})




// Route - get login details
router.post('/loggedUser', fetchSeller, async (req, res) => {
    try {
        sellerID = req.seller.id;
        const seller = await Seller.findById(sellerID).select("-password");
        res.send(seller);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error");
    }
})






module.exports = router;