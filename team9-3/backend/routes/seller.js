const express = require('express');
const router = express.Router();
const Seller = require("../models/Seller");
const bcrypt = require('bcryptjs');
const fetchUser = require('../middleware/fetchUser');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
const JWT_secret = process.env.JWT_SECRET;

dotenv.config({
    path: __dirname + '/config.env'
});

// Route-1 for creating user
router.post('/signup', async (req, res) => {

    let success = false;

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
        success = true;
        res.status(201).json({
            success,
            message: "Seller registered successfully"
        })

    } catch (error) {
        console.log(error);
    }

})


// Route-2  login
router.post('/login', async (req, res) => {
    let success = false;
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
            console.log(password + " " + seller);
            const validPassword = await bcrypt.compare(password, seller.password);
            if (validPassword) {
                const data = {
                    seller: {
                        id: seller._id
                    }
                }
                const authtoken = jwt.sign(data, JWT_secret);
                success = true;
                res.status(200).json({
                    success,
                    message: "Login Successfully",
                    authtoken
                })
            } else {
                 res.status(401).json({
                    success,
                    message: "Wrong credentials"
                })
            }
        }  {
             res.status(401).json({
                success,
                message: "Wrong credentials"
            });
        }

    } catch (error) {
        console.log(error);
    }
})


// Route -3 get login details
router.post('/loggedUser', fetchUser, async (req, res) => {
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