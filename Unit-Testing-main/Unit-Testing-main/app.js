// module.exports = function() {
//     return 'hello';
// }

const express = require('express');
const app = express();
const morgan = require('morgan');
const Bmi = require('./models/bmi');
const mongoose = require('mongoose');
const connectDB = require('./Db/db');

//create a local database connection string
connectDB();

//@middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('', (req, res) => {
    res.send('Home page')
});

//@desc POST/user/Bmi 
app.use('/', require('./routes/userBmi'));

//@server listening
const startApplication = async() => {
    await app.listen(3000, () => {
        console.log("app is running on port 3000");
    })
}

startApplication();





module.exports = {
    sayHello: function() {
        return 'hello';
    },
    multiplyNumbers: function(value1, value2) {
        return value1 * value2;
    }
}