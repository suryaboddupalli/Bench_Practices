const express = require("express");
const router = express.Router()
const ConversationController = require("../Controllers/ConversationController")


router.post("/", ConversationController.PostConversation)
router.post("/:id", ConversationController.GetConversation)


module.exports = router 