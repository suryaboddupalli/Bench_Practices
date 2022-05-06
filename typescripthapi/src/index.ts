"use strict";

import * as hapi from 'hapi'
import { userData, loginSchema } from './JoiValidation'
import jwt from 'jsonwebtoken'

const server: hapi.Server = new hapi.Server({ port: 3000, host: 'localhost' })

server.route({
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        reply.response("Hello World")
    }
});

server.route([{
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        reply.response("Hello World")
    }
},
{
    method: "post",
    path: "/post",
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        const data = request.payload
        userData.validateAsync(data).then(val => {
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
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        const username = request.params.username
        reply.response(`hello ${username}`)
    }
}, {
    method: "Get",
    path: "/get/{id?}",
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        const data = request.params.id
        if (request.params.id) {
            return reply.response(`userID : ${data}`)
        }
        else {
            return reply.response('userId')
        }

    }
},
{
    method: "POSt",
    path: "/login",
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        const data = request.payload
        loginSchema.validateAsync(data)
            .then((value) => {
                console.log(value)
                const token = jwt.sign(value.username, 'sceret')
                reply.response(token)
            })
            .catch(err => {
                console.log(err.details[0].message)
            })

    }
},{
    plugin:require('./Loginplug')
}
]);

server.start()
    .then(() => console.log("sever connected"))