import Hapi from '@hapi/hapi'
require('dotenv').config()
const redis = require('ioredis')
const Routes = require('./Routes')
import {newconfig} from './Config/Convict'


export const Redis = new redis(newconfig._instance.Redis.port, newconfig._instance.Redis.port)

Redis.on('connect',function(){
    console.log("redis server connected")
})

Redis.JSON.set('noderedis:userData','.',{
    name:'surya',
    dept:"ece"
})


export const server: Hapi.Server = Hapi.server({ port: process.env.HAPI_PORT, host: process.env.HAPI_HOST })

server.start()
    .then((res) => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })
server.route(Routes)
