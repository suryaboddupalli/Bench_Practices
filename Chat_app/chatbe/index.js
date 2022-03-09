const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRoutes')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use("/auth", AuthRouter)


app.listen(8000, () => {
    console.log('server connected')
})