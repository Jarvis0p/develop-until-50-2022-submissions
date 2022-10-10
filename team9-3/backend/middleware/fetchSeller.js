const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
const JWT_secret = "mylittlesecret@ecommerce";



const fetchSeller = (req, res, next) => {
    // Get the userfrom the jwt token and add id to req object
    const token = req.header('auth-token');

    try {
        const data = jwt.verify(token, JWT_secret);
        req.seller = data.seller;
        next();
    } catch (error) {
        res.status(401).send({
            error: "Please authenticate using a valid token"
        })
    }
}

module.exports = fetchSeller;