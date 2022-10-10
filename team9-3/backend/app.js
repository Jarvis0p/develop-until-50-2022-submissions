const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({
    path: __dirname + '/config.env'
});
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connectToMongo();
app.use("/user", require('./routes/user'));
app.use("/seller", require('./routes/seller'));
app.use("/product", require('./routes/product'));


app.get('/',(req,res)=>{
    res.send("Hello, I am backend here");
})

app.listen(port, (req,res)=>{
    console.log("backend is running at 8000");
})