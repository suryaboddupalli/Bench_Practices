const express = require("express")
const router = express.Router()
const AuthController = require('../Controllers/AuthController')

router.post('/signup', AuthController.register)
router.post('/login', AuthController.login)
router.get('/get', AuthController.userDetail)


module.exports = router