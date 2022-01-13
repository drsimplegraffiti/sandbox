const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express();

//routers
const router = require('./routes/productRouter');
const review = require('./routes/reviewRouter');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


//api
app.use('/api/products', router);
app.use('/api/review', review);

const port = process.env.PORT || 6787

app.get('/', (req, res) => {
    res.json({ message: "Home sequelize landing Page" });
})

app.listen(port, () => {
    console.log(`App is running on http:localhost:${port}`)
})