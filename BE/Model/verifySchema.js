const mongoose = require('mongoose')

const UserVerificationschema = new mongoose.Schema({
    userId: String,
    otp: String,
    createdAt: Date,
    expiresAt: Date,
})

module.exports = mongoose.model('UserVerification', UserVerificationschema)