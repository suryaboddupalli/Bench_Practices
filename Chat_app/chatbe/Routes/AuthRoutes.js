const express = require("express")
const router = express.Router()
const AuthController = require('../Controllers/AuthController')

router.post('/signup', AuthController.register)
router.post('/login', AuthController.login)
router.post("/verify", AuthController.verifyOtp)
router.post("/resend", AuthController.reSendVerificationEmail)
router.get("/getotp", AuthController.getOtp)
router.post("/emailcheck", AuthController.emailCheck)
router.post("/forgot", AuthController.forgotpassword)



module.exports = router