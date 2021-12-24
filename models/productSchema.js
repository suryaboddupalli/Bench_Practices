const mongoose = require('mongoose')

const MoreDetailsSchema = new mongoose.Schema({
    color: {
        type: String
    },
    Memory: {
        type: String
    },
    Processor: {
        type: String
    },
    RearCamera: {
        type: String
    },
    FrontCamera: {
        type: String
    },
    Display: {
        type: String
    },
    Battery: {
        type: String
    }
})

const productSchema = new mongoose.Schema({
    Title: {
        type: String
    },
    Image: {
        type: String
    },
    Price: {
        type: String
    },
    Description: {
        type: String
    },
    MoreDetails: [MoreDetailsSchema]
})

module.exports = mongoose.model('Product', productSchema)