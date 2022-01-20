const hotelController = require('../controllers/hotelController')
const express = require("express");
const router = express.Router()

router.get("/", hotelController.hotelDetails)

router.post("/add", hotelController.addHotel)

module.exports = router