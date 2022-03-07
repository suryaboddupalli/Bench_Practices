const express = require("express")
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = "http://localhost:9000/" | 9000

http.listen(port, () => {
    console.log("node server is running" + port)
})

io.on("connection", (socket) => {
    console.log("socket connected")
    socket.on("data", (data) => {
        socket.broadcast.emit("data", data)
    })
})