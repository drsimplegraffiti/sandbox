const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/database.js')
const router = express.Router();
require('dotenv').config();

//load config
dotenv.config({ path: './config/database.js' });
connectDB();


// Express instance
const app = express();
const port = process.env.PORT || 7000;

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Routes
app.use('/', require('./routes/index.js'));
app.use('/', require('./routes/user_register.js'));
app.use('/', require('./routes/tutor_register.js'));
app.use('/', require('./routes/all_user_signin.js'));
app.use('/', require('./routes/subject'));



// Server
app.listen(port, console.log(`Server running on port ${port}`))
