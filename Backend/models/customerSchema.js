const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Phone: {
        type: String,
    },
    Address: {
        type: String,
    },
    Address_Proof: {
        type: String,
    },
    Pan_Card: {
        type: String
    },
    Account_Number: {
        type: String
    },
    Balance: {
        type: String
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Customer', customerSchema)