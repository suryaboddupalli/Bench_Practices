const { Router } = require("express")
const express = require("express")
const router = express.Router()
const ReviewController = require('../Controllers/ReviewController')

router.post('/add', ReviewController.addReview)
router.get('/get', ReviewController.ReviewDetails)
router.get('/get/:id', ReviewController.ProductReview)


module.exports = router