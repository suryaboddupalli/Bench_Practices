const Product = require('../models/productSchema')

const addProducts = async (req, res) => {
    try {
        const { Title, Image, Price, Description, color, Memory, Processor, RearCamera, FrontCamera, Display, Battery } = req.body;
        const newproduct = new Product({
            Title, Image, Price, Description, color, Memory, Processor, RearCamera, FrontCamera, Display, Battery
        })
        newproduct.save();
        res.status(200).send('Product Registered Successfully')
    }
    catch (error) {
        res.send('server error')
    }
}

const products = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
        console.log('data recived')
    } catch (error) {
        res.send('Internal Server Error')
    }
}

module.exports = { addProducts, products }