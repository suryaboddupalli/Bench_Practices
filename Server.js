const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://surya:surya@cluster0.g0zns.mongodb.net/test"
const app = express();
const cors = require('cors')
<<<<<<< HEAD
const userRouter = require('./Routes/UserRoute')
=======
const userRoute = require('./Routes/UserRoute')
const ProductRoute = require('./Routes/ProductRoute')
>>>>>>> e6187d1 (28 dec)

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

<<<<<<< HEAD
app.use('/user', userRouter)
=======
app.use('/user', userRoute)

app.use('/product',ProductRoute)
>>>>>>> e6187d1 (28 dec)

app.listen(8000, () => {
    console.log('server connected')
})