const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String
    },
    hotelLocation: {
        type: String
    },
    hotelDescription: {
        type: String
    },
    hotelImg: {
        type: String
    },
    singleRoomImg: {
        type: String
    },
    singleRoomPrice: {
        type: String
    },
    singleRoomDetails: {
        type: String
    },
    doubleRoomImg: {
        type: String
    },
    doubleRoomPrice: {
        type: String
    },
    doubleRoomDetails: {
        type: String
    },
    hallImg: {
        type: String
    },
    hallPrice: {
        type: String
    },
    hallDetails: {
        type: String
    },
    Facility: {
        type: String
    }

})

module.exports = mongoose.model('Hotel', hotelSchema)