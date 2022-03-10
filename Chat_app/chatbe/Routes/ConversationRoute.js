const express = require("express");
const router = express.Router()
const ConversationController = require("../Controllers/ConversationController")


router.post("/", ConversationController.PostConversation)
router.get("/:userId", ConversationController.GetConversation)


module.exports = router 