const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const connectDB = require('./db/db')
require('dotenv').config();

connectDB()

const app = express()
const port = process.env.PORT || 8787

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    return res.status(200).json('Customers service landing page')
})

app.use('/', require('./routes/customers'))


app.listen(port, ()=>{
    console.log(`Customers service running on port ${port}`)
})