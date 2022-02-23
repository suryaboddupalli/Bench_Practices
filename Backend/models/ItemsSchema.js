const mongoose = require('mongoose')

const ItemsSchema = new mongoose.Schema({
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
    }, color: {
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

module.exports = mongoose.model('Items', ItemsSchema)