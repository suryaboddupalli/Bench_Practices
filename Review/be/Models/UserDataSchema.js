const mongoose = require('mongoose')

const UserDataSchema = new mongoose.Schema({

    Name: {
        type: String,
    },
    Email: {
        type: String,
    },
    Phone: {
        type: Number,
    },
    Address: {
        type: String
    }
}, { timestamps: true }
)

module.exports = mongoose.model('UserData', UserDataSchema)

