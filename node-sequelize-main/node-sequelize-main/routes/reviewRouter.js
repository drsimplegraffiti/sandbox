const express = require('express')
const router = express.Router()

const reviewController = require('../controllers/reviewController');


router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)





module.exports = router;