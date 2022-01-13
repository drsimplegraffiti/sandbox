const express = require('express');
const { userRegister } = require('../controller/user');
const router = express.Router();

// @desc    Register as a student
// @route   POST/api/student/register
router.get('/api/student/register', (req, res)=>{
    res.send('user post route')
})


// @desc    Register as a student
// @route   POST/api/student/register
router.post('/api/student/register', userRegister)


// Export router
module.exports = router;
