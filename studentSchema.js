const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
    },
    dateOfBirth:{
        type: String,
    },
    gender:{
        type: String,
    },
    altMobile:{
        type: String,
    },
    address:{
        type: String,
    },
    pincode:{
        type: String,
    },
    collegeName:{
        type: String,
    },
    degree:{
        type: String,
    },
    branch:{
        type: String,
    },
    loaction:{
        type: String,
    },
    yearOfPass:{
        type: String,
    },
    percent:{
        type: String,
    }
},{ timestamps: true }
)

module.exports = mongoose.model('student',StudentSchema)