require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


//import routes
const authRoutes = require('./routes/auth');
const todosRoutes = require('./routes/todos');

//create app instance
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api', (req, res) => {
    res.status(200).json('Home page')
});

app.post('/name', (req, res) => {
    if (req.body.name) {
        return res.json({ name: req.body.name })
    } else {
        return res.status(400).json({ error: 'No name provided' })
    }
});


app.use('/api/auth', authRoutes);
app.use('/api/todos', todosRoutes);


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 50, //This is to make only 50 people to be able to connect at a time.
            wtimeoutMS: 2500, //After 2500milliseconds the request will time out    
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection Established...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);

    }
}
connectDB(app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
}));