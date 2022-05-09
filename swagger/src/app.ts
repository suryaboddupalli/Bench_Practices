import Hapi, { ResponseToolkit } from '@hapi/hapi'
import HapiSwagger from 'hapi-swagger'
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import {userData} from "./JoiValidation"

async function startServer(){
const server: Hapi.Server = new Hapi.Server({ port: 9000, host: "localhost" })

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Test API Documentation'
    }
};

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
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
];

server.register(plugins);

server.route([{
    method: "get",
    path: '/',
    handler: async (request: Hapi.Request, reply: ResponseToolkit): Promise<any> => {
        await reply.response('hello surya')
    }
},{
    method:'post',
    path:'/',
    handler: async (request: Hapi.Request, reply: Hapi.ResponseToolkit): Promise<any> => {
        const data = request.payload
       await userData.validateAsync(data).then(val => {
            console.log(val)
            reply.response(val)
        }).catch(err => {
            throw new Error('Failed to validate input ' + err.details[0].message);
        })
    }
},
{
    method: "GET",
    path: "/get/{username}",
    handler:async (request: Hapi.Request, reply: Hapi.ResponseToolkit): Promise<any> => {
        const username = await request.params.username
        reply.response(`hello ${username}`)
    }
},
])

server.start()
    .then(() =>
        console.log('connected' + process.env.PORT))
    .catch(err => {
        console.log(err)
    })
}

startServer()
