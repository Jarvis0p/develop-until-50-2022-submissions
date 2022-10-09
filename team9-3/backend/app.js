const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({
    path: __dirname + '/config.env'
});
const app = express();
const port = process.env.PORT;
connectToMongo();

app.use(cors());
app.use(express.json());

app.use("/user",require('./routes/user'));
app.use("/seller",require('./routes/seller'));


app.get('/',(req,res)=>{
    res.send("Hello, I am backend here");
})

app.listen(port, (req,res)=>{
    console.log("backend is running at 8000");
})