const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRoutes')
const ConversationRouter = require('./Routes/ConversationRoute')
const MessageRouter = require('./Routes/MessageRoute')


mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use('/auth', AuthRouter)
app.use('/conversation', ConversationRouter)
app.use('/message', MessageRouter)



app.listen(9000, () => {
    console.log('server connected')
})