const express = require("express");
const router = express.Router()
const productController = require("../controllers/productController")

router.get("/", productController.productDetails)

router.get("/:id",productController.Product)

router.post("/add", productController.addProduct)

router.put("/update/:id",productController.UpdateProduct)

module.exports = router 