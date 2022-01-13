const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config();
const connectDb = require('./config/db')

const app = express()
app.use(cors())
const apiPort = process.env.PORT || 7878


connectDb()
const movieRouter = require('./routes/movie-router')

app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home page!')
})
app.use('/api', movieRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))