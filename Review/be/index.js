const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const UserRouter = require('./Routes/UserDataRoute')
const ProductRouter = require('./Routes/ProductRoute')
const reviewRouter = require('./Routes/ReviewRoutes')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use("/userData", UserRouter)
app.use("/product", ProductRouter)
app.use("/review", reviewRouter)

app.listen(8000, () => {
    console.log('server connected')
})