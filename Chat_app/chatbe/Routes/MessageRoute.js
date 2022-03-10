const express = require("express");
const router = express.Router()
const MessageController = require("../Controllers/MessageController")


router.post("/", MessageController.PostMessage)
router.get("/:id", MessageController.GetMessage)


module.exports = router 