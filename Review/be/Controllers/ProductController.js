const ProductData = require('../Models/ProductSchema')

const Productadd = async (req, res) => {
    try {
        const { Name, Profile, Cost, Description } = req.body;
        const newProduct = await new ProductData({
            Name, Profile, Cost, Description
        })
        newProduct.save();
        res.send('Product Added Successfully')
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}

const ProductDetails = async (req, res) => {
    try {
        const products = await ProductData.find()
        res.json(products)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

const ProductDetail = async (req, res) => {
    console.log(req.params.Name)
    try {
        const user = await ProductData.findById(req.params.Name)
        console.log(await ProductData.findById(req.params.Name))
        res.json(user)
        console.log(user)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

module.exports = { Productadd, ProductDetails, ProductDetail }