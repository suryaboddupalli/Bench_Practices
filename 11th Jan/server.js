const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const userRoutes = require('./Routes/UserRoutes')
const chatRoutes = require('./Routes/ChatRoutes')
const messageRoutes = require('./Routes/MessageRoute')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})

app.use(express.json())
app.use(cors())

app.use('/',userRoutes)
app.use('/chat',chatRoutes)
app.use('/message',messageRoutes)

app.listen(8000, () => {
    console.log('server connected')
})