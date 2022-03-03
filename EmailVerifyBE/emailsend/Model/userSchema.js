const mongoose = require('mongoose')

const RegisterUserSchema = new mongoose.Schema({
    Name: String,
    email: String,
    phone: Number,
    password: String,
    verify: Boolean

}, { timestamps: true }
)

module.exports = mongoose.model('UserData', RegisterUserSchema)