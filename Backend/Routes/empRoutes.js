const express = require('express')
const Router = express.Router()
const empController = require('../controllers/empController')

Router.post('/add', empController.empRegister)

Router.post('/login', empController.empLogin)

Router.get('/', empController.empDetails)

module.exports = Router