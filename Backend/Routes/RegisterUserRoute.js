const express = require("express");
const router = express.Router()
const RegisterUserController = require("../controllers/RegisterUserController")

router.post("/signup", RegisterUserController.SignUp)


module.exports = router 