const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Address:{
        type:String
    },
    Mobile:{
        type:String
    },
    IdType:{
        type:String
    },
    IdNumber:{
        type:String
    },
    RoomType:{
        type:String
    },
    NoOfDays :{
        type:Number
    },
    From:{
        type:Date
    },
    To:{
        type:Date
    }
})

module.exports = mongoose.model('Book',BookSchema)