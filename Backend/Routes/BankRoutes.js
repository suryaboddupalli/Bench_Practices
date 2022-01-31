const express = require('express')
const Router = express.Router()
const bankController = require('../controllers/bankController')

Router.use('/reg', bankController.accountRegister)

Router.use('/login', bankController.login)


Router.use('/', bankController.details)

module.exports = Router