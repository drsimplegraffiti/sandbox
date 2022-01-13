const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


//json middle-ware
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// Routes
app.get('/', (req, res) => {
    res.send('we are on home');
})

// db connection
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, console.log('Database connected'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})