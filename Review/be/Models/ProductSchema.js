const mongoose = require('mongoose')

const ProductDataSchema = new mongoose.Schema({

    Name: {
        type: String,
    },
    Profile: {
        type: String,
    },
    Description: {
        type: String,
    },
    Cost: {
        type: Number
    }
}, { timestamps: true }
)

module.exports = mongoose.model('ProductData', ProductDataSchema)

