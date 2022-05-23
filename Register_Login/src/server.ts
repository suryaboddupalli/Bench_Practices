import Hapi from '@hapi/hapi'
require('dotenv').config()
const redis = require('ioredis')
const Routes = require('./Routes')
import { newconfig } from './Config/Convict'


export const Redis = new redis(newconfig._instance.Redis.port, newconfig._instance.Redis.port)

Redis.on('connect', function () {
    console.log("redis server connected")
})


export const server: Hapi.Server = Hapi.server({ port: newconfig._instance.Hapi.port, host: newconfig._instance.Hapi.host })

server.start()
    .then((res) => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })
server.route(Routes)
