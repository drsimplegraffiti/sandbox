const express = require('express');
const router = express.Router();
const cloudinary = require("cloudinary");
const multer = require("multer");
const fs = require("fs");
const path = require('path');
const mongoose = require('mongoose');
const Techie = require('../models/techieModel');
const Subscribe = require('../models/subscribe-model');
const responseHandler = require("../utils/responseHandlers");
const errorHandler = require("../utils/errorHandlers");
const customError = require("../utils/customError");



// search by email
exports.searchByEmail = async(req, res, next) => {
    try {
        var regex = new RegExp(req.params.email, 'i');
        Techie.find({ email: regex }).then((result) => {
            return responseHandler(res, 200, 'success', result)
        })
    } catch (error) {
        console.log(error);
        return customError(400, "Error")
    }
}


//Techies landing page
exports.techHomePage = async(req, res, next) => {
    try {
        res.render('index')
    } catch (error) {
        console.log(error)
    }
}

//Docs page
exports.DocsPage = async(req, res, next) => {
    try {
        res.render('docs')
    } catch (error) {
        console.log(error)
    }
}


//Techies Api page
exports.apiCalls = async(req, res, next) => {
    try {
        res.render('api')
    } catch (error) {
        console.log(error)

    }
}

//handlers aka controllers
exports.getAllTechiesNames = async(req, res) => {
    try {
        //ignore query logic
        const queryObj = {...req.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el])

        const data = await Techie.find(queryObj);
        return responseHandler(res, 200, ` kodemonk users gotten successfully`, data);
    } catch (error) {
        console.log(error);
        return new customError(500, 'Error')
    }
}

exports.createTechNames = async(req, res, next) => {
    try {
        const newTechie = await Techie.create(req.body);
        newTechie.save();
        return res.status(200).json({
            message: 'success',
            data: newTechie
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: ' Server Error'
        })
    }
}

exports.aggregateUser = async(req,res,next)=>{
try {
     const user = await Techie.estimatedDocumentCount();
     return res.status(200).json({
         status: 'success',
         totalUserCreated:user
     })
} catch (error) {
 console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: 'Server Error'
        })
}

}








exports.subscribeEmail = async(req, res, next) => {
    try {
        const sendMail = await Subscribe.create(req.body);
        sendMail.save();
        // return res.status(200).json({
        //     message: 'Email sent successfully',
        //     data: Subscribe
        // })
         res.render('successTemplate')
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid Data sent'
        })
    }
}
exports.successPage = async(req,res,next)=>{
try {
    return res.render('successTemplate')
} catch (error) {
    console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid Data sent'
        })
}
}
exports.deleteTechieName = async(req, res, next) => {
    try {
        const deleteTechie = await Techie.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid Data sent'
        })
    }
}
exports.updateTechieName = async(req, res, next) => {
    try {
        const updateTechieInfo = await Techie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        return res.status(200).json({
            data: updateTechieInfo
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}
exports.getSingleTechieName = async(req, res, next) => {
    try {
        const fetchSingleTechie = await Techie.findById(req.params.id);
        return res.status(200).json({
            status: 'success',
            data: fetchSingleTechie
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

exports.getSingleByUsername = async(req, res, next) => {
    try {
        var regex = new RegExp(req.params.username, 'i');
        const fetchSingleTechie = await Techie.findById({ username: regex });
        return res.status(200).json({
            status: 'success',
            data: fetchSingleTechie
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}