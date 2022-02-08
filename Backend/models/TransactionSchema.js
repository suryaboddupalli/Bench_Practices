const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    TransactionType: {
        type: String
    },
    Name: {
        type: String
    },
    Sender: {
        type: String
    },
    Receiver: {
        type: String
    },
    Amount: {
        type: String
    },
    Status: {
        type: String
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Transaction', transactionSchema)