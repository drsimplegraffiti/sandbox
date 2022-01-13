const express = require('express');
const router = express.Router();
const Order  = require('../models/Order')
const mongoose = require('mongoose')
const axios = require('axios');
const { urlencoded } = require('express');

//CREATE ORDER
router.post('/order', async(req,res)=>{
    try {
        // const {customerId, bookId, initialDate, deliveryDate} = req.body;
        const newOrder = {
            customerId:mongoose.Types.ObjectId(req.body.customerId),
            bookId:mongoose.Types.ObjectId(req.body.bookId),
            initialDate:req.body.initialDate,
            deliveryDate:req.body.deliveryDate
        }
        const order = new Order(newOrder);

        const savedOrder = await order.save();
        return res.status(201).json({
            message: 'New order successfully created',
            data:savedOrder
        })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('something went wrong')
    }
})

//GET ALL ORDERS
router.get('/orders', async(req,res)=>{
    try {
        const getOrders = await Order.find({})
        return res.status(200).json(getOrders)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('something went wrong')
    }
})

//interacting with other routes
router.get('/order/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const order = await Order.findById(id);
        if(order){
          const url = await axios.get(`http://localhost:9898/customer/${order.customerId}`)
          const orderObject ={
              customerName:url.data.name,
              bookTitle:''
            }

         const bookInfo =  await axios.get(`http://localhost:4545/book/${order.bookId}`)
         console.log(bookInfo)
          orderObject.bookTitle = bookInfo.data.title;
             return res.status(200).json(orderObject)
        }else{
            return res.status(404).json('invalid order')
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json('something went wrong')

    }
})

module.exports = router

