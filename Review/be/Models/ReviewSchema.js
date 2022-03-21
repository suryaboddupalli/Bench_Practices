const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({

    ProductId: {
        type: String,
    },
    CustomerId: {
        type: String,
    },
    Comment: {
        type: String,
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Review', ReviewSchema)

