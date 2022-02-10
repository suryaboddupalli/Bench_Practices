const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Age: {
        type: Number,
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Data', todoSchema)