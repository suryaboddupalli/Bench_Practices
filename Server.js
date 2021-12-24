const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://surya:surya@cluster0.g0zns.mongodb.net/test"
const app = express();
const cors = require('cors')
const userRouter = require('./Routes/UserRoute')
const productRouter = require('./Routes/CartRoute')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)

app.use('/products', productRouter)

app.listen(8000, () => {
    console.log('server connected')
})