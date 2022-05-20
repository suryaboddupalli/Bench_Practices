import Hapi from '@hapi/hapi'
require('dotenv').config()
const redis = require('ioredis')
const Routes = require('./Routes')

export const Redis = new redis(process.env.REDIS_PORT, process.env.REDIS_HOST)

Redis.on('connect',function(){
    console.log("redis server connected")
})

Redis.json.set('data','.',{name:"surya"})


export const server: Hapi.Server = Hapi.server({ port: process.env.HAPI_PORT, host: process.env.HAPI_HOST })

server.start()
    .then((res) => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })
server.route(Routes)
