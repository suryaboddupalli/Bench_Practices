const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const RegisterUserSchema = new mongoose.Schema({
    Name: String,
    email: String,
    phone: Number,
    password: String,
    verify: Boolean

}, { timestamps: true }
)
RegisterUserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        return next()
    }
    bcrypt.hash(this.password, 10, (error, hashedPassword) => {
        if (error) return next(error);
        this.password = hashedPassword
        next()
    })
})

RegisterUserSchema.methods.compairedPassword = function (password) {
    if (password) {
        return bcrypt.compare(password, this.password)
    }
    return false
}
module.exports = mongoose.model('UserData', RegisterUserSchema)