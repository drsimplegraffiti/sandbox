const express = require('express');
const { tutorRegister } = require('../controller/tutor');
const router = express.Router();


// @desc    Register as a tutor
// @route   GET/api/tutor/register
router.get('/api/tutor/register', (req, res)=>{
    res.send('tutor post route')
})

// @desc    Register as a tutor
// @route   POST/api/tutor/register
router.post('/api/tutor/register', tutorRegister);


module.exports= router;
