const express = require('express');
const router = express.Router();
const { indexPage } = require('../controller/index');


// @desc    Homepage
// @route   GET/
router.get('/', indexPage)


// Export router
module.exports = router;
