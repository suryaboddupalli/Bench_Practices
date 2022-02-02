const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Username: {
        type: String,
    },
    Password: {
        type: String,
    },
    EmployeeId: {
        type: String,
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Employee', empSchema)