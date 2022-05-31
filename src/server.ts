import Hapi from '@hapi/hapi'
import { routes } from './routes/index'
import { config } from './convict/config'

const hapiConfig = config.get('hapi')

export const server: Hapi.Server = Hapi.server(hapiConfig)

server.start()
    .then((res) => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })

server.route(routes)
