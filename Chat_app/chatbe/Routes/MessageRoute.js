const express = require("express");
const router = express.Router()
const MessageController = require("../Controllers/MessageController")


router.post("/", MessageController.PostMessage)
router.post("/:id", MessageController.GetMessage)


module.exports = router 