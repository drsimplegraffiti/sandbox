const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

//import
const authRoute = require('./routes/auth');
const articleRoute = require('./routes/articles');


//connect to db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true}, ()=> console.log('connected to db'))

// Initialize Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100, //limit each IP to 100 requests per windowsMs
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(limiter);


//route middleware
app.use('/api/user', authRoute);
app.use('/api/user', articleRoute);

//Listen to server
app.listen(3456, ()=> console.log('Server running ......'));