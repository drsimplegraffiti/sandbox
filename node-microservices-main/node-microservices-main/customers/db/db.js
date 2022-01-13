const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URI, {
            // maxPoolSize: 50, //This is to make only 50 people to be able to connect at a time.
            // wtimeoutMS: 2500, //After 2500milliseconds the request will time out    
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Godan MongoDB connection Established...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);

    }
}

module.exports = connectDB;