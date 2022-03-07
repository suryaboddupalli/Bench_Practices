const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8000 })

ws.on("connection", (socket) => {
    console.log("user Connected")
    socket.on("close", () => {
        console.log("disconnected")
    })
    socket.on("message", (Data) => {
        console.log('Data recived' + Data)
        socket.send("data from server" + Data)
    })
})