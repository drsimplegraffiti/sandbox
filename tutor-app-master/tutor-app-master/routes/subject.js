const express = require('express');
const { allSubjects } = require('../controller/subject');
const router = express.Router();

// @desc    Subject gotten by all
// @route   GET/api/category/:categoryId/:subjectId
router.get('api/category/:categoryId/:subjectId', allSubjects)

module.exports = router;
