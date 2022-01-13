const express = require('express')
const axios = require('axios')
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./db/db')
require('dotenv').config();

connectDB()

const app = express()
const port = process.env.PORT || 5648

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    return res.status(200).json('orders service landing page')
})

app.use('/', require('./routes/orders'))


app.listen(port, ()=>{
    console.log(`orders service running on port ${port}`)
})