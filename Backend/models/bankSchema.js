const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Username: {
        type: String,
    },
    Password: {
        type: String,
    },
    Account_Number: {
        type: String,
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Bank', bankSchema)