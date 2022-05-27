import Hapi from '@hapi/hapi'
const Routes = require('./Routes')
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import * as HapiSwagger from 'hapi-swagger'


const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Test API Documentation',
    },
};

const init = async () => {
    const server = await Hapi.server({ port: 4000, host: 'localhost' })

    await server.register([
        {
            plugin: Inert
        },
        {
            plugin: Vision
        },
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }

    ])
    server.route(Routes)

    await server.start()
        .then((res) => {
            console.log("connected")
        })
        .catch(err => {
            console.log(err)
        })
}

init()