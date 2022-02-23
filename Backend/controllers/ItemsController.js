const Items = require('../models/ItemsSchema')

const addItems = async (req, res) => {
    try {
        const { Title, Image, Price, Description, color, Memory, Processor, RearCamera, FrontCamera, Display, Battery } = req.body;
        const newItem = new Items({
            Title, Image, Price, Description, color, Memory, Processor, RearCamera, FrontCamera, Display, Battery
        })
        newItem.save();
        res.status(200).send('Product Registered Successfully')
    }
    catch (error) {
        res.send('server error')
    }
}

const getItems = async (req, res) => {
    try {
        const Item = await Items.find()
        res.json(Item)
        console.log('data recived')
    } catch (error) {
        res.send('Internal Server Error')
    }
}

const singleItem = async (req, res) => {
    try {
        const data = await Items.findById(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const deleteItems = async (req, res) => {
    try {
        const data = await Items.findByIdAndDelete(req.params.id)
        res.send('Deleted')
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { addItems, getItems, singleItem, deleteItems }