const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();
const Techie = require('../models/techieModel');


// Async mongoose connection using async await
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(() => console.log('DB connected successfully'));

//Read Json File
const techies = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

//seed or import Data into DB
const importData = async() => {
    try {
        await Techie.create(techies);
        console.log('Data seeded successfully....');
    } catch (error) {
        console.log(error)
        process.exit();
    }
}

//delete Data in DB
const deleteData = async() => {
    try {
        await Techie.deleteMany();
        console.log('Data successfully deleted');
    } catch (error) {
        console.log(error)
    }
    process.exit();
}


if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData()
}

console.log(process.argv);