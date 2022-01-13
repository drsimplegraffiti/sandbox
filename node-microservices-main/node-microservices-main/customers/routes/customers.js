const express = require('express');
const router = express.Router();
const Customer  = require('../models/Customer')


//CREATE CUSTOMER
router.post('/customer', async(req,res)=>{
    try {
        const {name, age, address} = req.body;

       const newCustomer = new Customer({
            name,
            age,
            address
        });
        const createdCustomer = await newCustomer.save();
        return res.status(201).json({
            message: 'Customer created successfully',
            data:createdCustomer
        })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})


//GET ALL CUSTOMERS
router.get('/customers', async(req,res)=>{
    try {
        const customers = await Customer.find({})
        return res.status(200).json(customers)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})


//GET SINGLE CUSTOMER
router.get('/customer/:id', async(req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(404).json('invalid ID passed')
        }
        const customer = await Customer.findById(id)
        return res.status(200).json(customer)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})


//DELETE SINGLE CUSTOMER
router.delete('/customer/:id', async(req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(404).json('invalid ID passed')
        }
        const customer = await Customer.findOneAndRemove(id)
        return res.status(204).json(customer)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})

module.exports = router;