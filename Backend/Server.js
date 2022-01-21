const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const userRouter = require('./Routes/UserRoute')
const hotelRouter= require('./Routes/hotelRoute')
const bookRouter = require('./Routes/bookRoute')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)

app.use('/hotel',hotelRouter)

app.use('/booking',bookRouter)

app.listen(8000, () => {
    console.log('server connected')
})