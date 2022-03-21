const { Router } = require("express")
const express = require("express")
const router = express.Router()
const ProductController = require('../Controllers/ProductController')

router.post('/add', ProductController.Productadd)
router.get('/get', ProductController.ProductDetails)
router.get('/get/:Name', ProductController.ProductDetail)


module.exports = router