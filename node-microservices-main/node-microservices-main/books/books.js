const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const connectDB = require('./db/db')
require('dotenv').config();

connectDB()

const app = express()
const port = process.env.PORT || 6746

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    return res.status(200).json('Book service landing page')
})

app.use('/', require('./routes/books'))


app.listen(port, ()=>{
    console.log(`Book service running on port ${port}`)
})