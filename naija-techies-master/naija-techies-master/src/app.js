const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
const env = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./DB/db');
require('dotenv').config();
const techieRouter = require('./routes/techiesRoutes');
const ejs = require('ejs');

const port = process.env.PORT || 6000;
const app = express();

//json middle-ware to send json using postman Apis
app.use(express.json());
//manages the url encoded data
app.use(express.urlencoded({ extended: true }));


app.use(morgan('dev'));
// connect DB
connectDB();

// app.use(cors());
// app.use(helmet());



//Register View Engine for server-side rendering
app.set('views', './src/views');
app.set('view engine', 'ejs');


//middleware: static files 
app.use(express.static('src/public'));

//@middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.render('index');
});

app.use('/kodemonk', techieRouter);

app.use('*', (req, res) => {
    res.status(404).render('404');
});






//Listen
const startApplication = async() => {
    await app.listen(port, () => {
        console.log(`API running on p🟢rt: ${port}`);
    })
}

// start app
startApplication();