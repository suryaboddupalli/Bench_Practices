const express = require('express')
const Router = express.Router()
const transactionController = require('../controllers/transactionController')

Router.post('/add', transactionController.transactions)

Router.get('/', transactionController.transactionDetails)

Router.delete('/delete/:id', transactionController.transactionDelete)


module.exports = Router