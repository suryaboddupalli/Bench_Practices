const express = require("express");
const router = express.Router()
const studentController = require('../controllers/studentController')


router.post("/add", studentController)

module.exports = router 