const router = require("express").Router();
const Conversation = require("../Model/ConversationSchema");


const PostConversation = async (req, res) => {
    console.log(req.body)
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err);
    }
};


const GetConversation = async (req, res) => {
    console.log(req.params.userId)
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports = { PostConversation, GetConversation }