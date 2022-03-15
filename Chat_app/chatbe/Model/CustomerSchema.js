const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    Name: {
        type: String,
    },
    Profile: {
        type: String,
    },
    Email: {
        type: String,
    },
    Phone: {
        type: Number,
    },
    Password: {
        type: String,
    },
    Admin: {
        type: Boolean,
    },
    Followers: {
        type: Array
    },
    Following: {
        type: Array
    },
    Verify: {
        type: Boolean
    }

}, { timestamps: true }
)

module.exports = mongoose.model('Friends', customerSchema)

