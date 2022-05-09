import * as hapi from 'hapi'
import {loginSchema} from './JoiValidation'
import jwt from 'jsonwebtoken'

const login= (request: hapi.Request, reply: hapi.ResponseToolkit) => {
    const data = request.payload
   loginSchema.validateAsync(data)
   .then((value)=>{
       console.log(value)
       const token = jwt.sign(value.username,'sceret')
       reply.response(token)
   })
   .catch(err=>{
       console.log(err.details[0].message)
   })
}


export const register = async (server:any,option:any,next:any)=>{
    server.route({
        method: "POSt",
    path: "/login",
    handler: login
    })
    next()
}

exports.login.attributes = {name:'login',version:'0.1.0'}