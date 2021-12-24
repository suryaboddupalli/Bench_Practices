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

module.exports = mongoose.model('MoreDetails', MoreDetailsSchema)
