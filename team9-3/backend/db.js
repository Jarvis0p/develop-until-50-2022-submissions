const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({
    path: __dirname + '/config.env'
});
const mongoURI = process.env.DATABASE_URL;

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology:true
            }, (response) => {
        console.log("Connected to monogo Successfully");
    })
}


//  useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
module.exports = connectToMongo;
