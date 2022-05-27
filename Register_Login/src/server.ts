import Hapi from '@hapi/hapi'
import { Routes } from './Routes/index'
import { Config } from './Config/Convict'

const HapiConfig = Config.get('Hapi')

export const server: Hapi.Server = Hapi.server(HapiConfig)

server.start()
    .then((res) => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })

server.route(Routes)
