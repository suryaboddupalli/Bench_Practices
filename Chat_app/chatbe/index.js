const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const UserRouter = require('./Routes/userRoute')
const ConversationRouter = require('./Routes/ConversationRoute')
const MessageRouter = require('./Routes/MessageRoute')


mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use('/user', UserRouter)
app.use('/conversation', ConversationRouter)
// app.use('/message', MessageRouter)



app.listen(8000, () => {
    console.log('server connected')
})