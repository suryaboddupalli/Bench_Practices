const express = require('express')
const Router = express.Router()
const customerController = require('../controllers/customerController')

Router.post('/add', customerController.customerAdding)

Router.get('/', customerController.customerDetails)

Router.get('/:id', customerController.customer)

Router.put('/update/:id', customerController.customerUpdate)

Router.delete('/delete/:id', customerController.customerDelete)

Router.put('/balUpdate/:id', customerController.balanceUpdate)


module.exports = Router