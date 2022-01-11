const express = require('express');
const router = express.Router()
const chatController = require('../controllers/ChatController')

router.post('/',chatController.newChat)
router.get("/:userId",chatController.userChat)

module.exports = router