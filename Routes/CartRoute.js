const express = require('express');
const router = express.Router()
const productController = require('../ShopController.js/productController')

router.post('/add',productController.addProducts)

router.get('/get',productController.products)

module.exports = router 