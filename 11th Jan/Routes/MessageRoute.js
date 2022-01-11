
const express = require('express');
const router = express.Router()
const MessageController = require('../controllers/MessageController')

router.post("/add",MessageController.addMessage)
router.get("/:chatId",MessageController.message)

module.exports = router
