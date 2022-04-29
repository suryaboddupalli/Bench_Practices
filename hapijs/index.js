const Hapi = require('@hapi/hapi')
const { handler } = require('@hapi/hapi/lib/cors')

const server = new Hapi.Server({ port: 8000, host: 'localhost' })

// server.route({
//     method: 'Get',
//     path: '/',
//     handler: function (request, h) {
//         return console.log("hello"), "hello"
//     }
// })

// server.route({
//     method: 'Post',
//     path: '/post',
//     handler: function (request, h) {
//         const data = request.payload
//         return console.log(data), data.name
//     }
// })

// server.route({
//     method: 'Get',
//     path: '/get/{id}',
//     handler: function (request, h) {
//         const data = request.params
//         return console.log(data), data
//     }
// })

// server.route({
//     method: 'GET',
//     path: '/get/{user*2}',
//     handler: function (request, h) {

//         const data = request.params.user.split('/');

//         return `Hello ${data[0]} ${data[1]}!`;
//     }
// });

// server.route({
//     method: 'GET',
//     path: '/header',
//     handler: async (request, h) => {
//         const header = await request.headers
//         console.log(header)
//         return header
//     }
// });

server.route([
    {
        method: 'Get',
        path: '/',
        handler: function (request, h) {
            return console.log("hello"), "hello"
        }
    }, {
        method: 'Post',
        path: '/post',
        handler: function (request, h) {
            const data = request.payload
            return console.log(data), data.name
        }
    },
    {
        method: 'GET',
        path: '/header',
        handler: async (request, h) => {
            const header = await request.headers
            console.log(header)
            return header
        }
    }
])

server.start()