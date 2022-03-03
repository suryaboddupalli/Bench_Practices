const express = require("express");
const router = express.Router()
const userController = require("../Controllers/userController")

router.post("/signUp", userController.signUp)
router.post("/verify", userController.verifyOtp)
router.post("/login", userController.login)
router.post("/emailcheck", userController.emailCheck)
router.post("/forgot", userController.forgotpassword)


module.exports = router 