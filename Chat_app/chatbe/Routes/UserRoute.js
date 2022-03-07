const express = require("express");
const router = express.Router()
const UserController = require("../Controllers/UserController")


router.post("/signUp", UserController.register)
router.post("/login", UserController.login)


module.exports = router 