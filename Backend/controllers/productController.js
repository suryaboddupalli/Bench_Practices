const Products = require('../model/ProductSchema')

const productDetails = async (req, res) => {
    try {
        const products = await Products.find()
        res.json(products)
    } catch (error) {
        res.send('Internal Server Error')
    }
}

const Product = async(req,res) =>{
    try{
        const product = await Products.findById(req.params.id)
        res.send(product)

    }catch(err){
        res.send('Internal Server Error')
    }
}

const addProduct = async (req, res) => {
    try {
        const { Id,Title,Image,Price,Description,color,Memory,FrontCamera,RearCamera,Display,Battery,Processor } = req.body
        const newProduct = new Products(
            { Id,Title,Image,Price,Description,color,Memory,FrontCamera,RearCamera,Display,Battery,Processor }
        )
        newProduct.save()
        res.send('Data saved')
    } catch (error) {
        res.send('Internal Server Error')
    }
}

const UpdateProduct = async(req,res) =>{
    const data = {
        Id = req.body.Id,
        Title = req.body.Title,
        Price = req.body.Price,
        Image = req.body.Image,
        Description = req.body.Description,
        color = req.body.color,
        Memory = req.body.Memory,
        FrontCamera = req.body.FrontCamera,
        RearCamera = req.body.RearCamera,
        Processor = req.body.Processor,
        Display = req.body.Display,
        Battery = req.body.Battery,
    }
    try{
        const product = await Products.findByIdAndUpdate(req.params.id,data)
        res.send(product)

    }catch(err){
        res.send('Internal Server Error')
    }
}

module.exports = {
    addProduct, productDetails, Product, UpdateProduct
}
