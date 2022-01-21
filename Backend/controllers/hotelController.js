const Hotel = require('../models/hotelSchema')

const addHotel = async (req, res) => {
    try {
        const {
            hotelName,
            hotelLocation,
            hotelDescription,
            hotelImg, hallImg,
            hallPrice, hallDetails,
            doubleRoomImg, doubleRoomPrice,
            doubleRoomDetails, singleRoomImg,
            singleRoomPrice, singleRoomDetails,
            Facility
        } = req.body
        const newHotel = new Hotel({
            hotelName,  
            hotelLocation,
            hotelDescription,
            hotelImg, hallImg,
            hallPrice, hallDetails,
            doubleRoomImg, doubleRoomPrice,
            doubleRoomDetails, singleRoomImg,
            singleRoomPrice, singleRoomDetails,
            Facility
        })
        newHotel.save()
        res.send('Hotel added')
    }
    catch (error) {
        res.send(error)
    }
}

const hotelDetails = async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { addHotel, hotelDetails }