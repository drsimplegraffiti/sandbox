const express = require('express');
const router = express.Router();

// @desc    All users sign-in
// @route   POST/api/tutor/register
router.post('/api/auth/login', (req, res)=>{
    res.send('tutor post route')
})

module.exports = router;
