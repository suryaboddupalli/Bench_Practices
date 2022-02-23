const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const userRouter = require('./Routes/UserRoute')
const empRouter = require('./Routes/empRoutes')
const customerRoute = require('./Routes/customerRoute')
const transactionRoute = require('./Routes/transactionRoute')
const todoRoute = require('./Routes/todoRoute')
const itemsRoute = require('./Routes/ItemsRoute')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)

app.use('/employees', empRouter)

app.use('/customer', customerRoute)

app.use('/transaction', transactionRoute)

app.use('/todo', todoRoute)

app.use('/items', itemsRoute)


app.listen(8000, () => {
    console.log('server connected')
})