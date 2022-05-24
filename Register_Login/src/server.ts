import Hapi from '@hapi/hapi'
require('dotenv').config()
const Routes = require('./Routes')
import { newconfig } from './Config/Convict'


export const server: Hapi.Server = Hapi.server({
    port: newconfig._instance.Hapi.port,
    host: newconfig._instance.Hapi.host
})

server.start()
    .then((res) => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })
    
server.route(Routes)
