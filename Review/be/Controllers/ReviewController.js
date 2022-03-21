const Review = require('../Models/ReviewSchema')

const addReview = async (req, res) => {
    try {
        const { ProductId, CustomerId, Comment } = req.body;
        const newReview = await new Review({
            ProductId, CustomerId, Comment
        })
        newReview.save();
        res.send('Product Added Successfully')
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}

const ReviewDetails = async (req, res) => {
    try {
        const productReview = await Review.find()
        res.json(productReview)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

const ProductReview = async (req, res) => {
    try {
        const user = await Review.findById(req.params.ProductId)
        res.json(user)
        console.log(user)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

module.exports = { addReview, ReviewDetails, ProductReview }