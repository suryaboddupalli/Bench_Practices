const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.userDetail)

router.get("/:id", userController.user)

router.post("/register", userController.register)

router.post("/login", userController.login)

module.exports = router 