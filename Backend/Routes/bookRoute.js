const BookController = require('../controllers/bookController')
const express = require('express')
const Router = express.Router()

Router.use('/add',BookController.booking)

Router.use('/',BookController.bookingDetails)

module.exports = Router