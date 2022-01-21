const Book = require('../models/bookSchema')

const booking = async (req, res) => {
    try {
        const { Name, Address, Mobile, IdProof,RoomType, NoOfDays, From, To } = req.body
        const newBook = new Book({ Name, Address, Mobile,RoomType, IdProof, NoOfDays, From, To })
        newBook.save()
        res.send('Booked successfully')
    }
    catch (error) {
        res.send(error)
    }
}

const bookingDetails = async (req, res) => {
    try {
        const Bookings = await Book.find()
        res.json(Bookings)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { booking, bookingDetails }