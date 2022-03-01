const mongoose = require('mongoose')

const UserVerificationschema = new mongoose.Schema({
    userId: String,
    uniqueString: String,
    createdAt: Date,
    expiresAt: String,
})

module.exports = mongoose.model('UserVerification', UserVerificationschema)