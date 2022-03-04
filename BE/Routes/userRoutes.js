const express = require("express");
const router = express.Router()
const userController = require("../Controllers/userController")
const { userValidationResult, userValidator } = require('../Validations/UserValidation')


router.post("/signUp", userValidationResult, userValidator, userController.signUp)
router.post("/verify", userController.verifyOtp)
router.post("/login", userController.login)
router.post("/emailcheck", userController.emailCheck)
router.post("/forgot", userController.forgotpassword)


module.exports = router 