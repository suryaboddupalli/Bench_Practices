const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Profile: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Admin: {
        type: Boolean,
        required: true
    }

}, { timestamps: true }
)

module.exports = mongoose.model('UserData', UserSchema)

