import hapi from '@hapi/hapi'
import mssql, { VarChar } from 'mssql'
import { Config } from './Config'
import { registerSchema } from './Validation'
import { registerData } from './Interfaces'
const bcrypt = require('bcryptjs')
const redis = require('ioredis')

require('dotenv').config()

const client = new redis(process.env.REDIS_PORT, process.env.REDIS_HOST)

client.on('connect', () => {
    console.log("client connected to redis")
})

client.get('name', function (err: any, val: any) {
    if (err) {
        console.log(err)
    }
    console.log(val)
})


const server: hapi.Server = hapi.server({ port: process.env.HAPI_PORT, host: process.env.HAPI_HOST })
const pool = new mssql.ConnectionPool(Config)

server.route([{
    method: 'GET',
    path: '/',
    handler: async function data(req: hapi.Request, res: hapi.ResponseToolkit) {
        try {
            const data = await (await pool.connect()).query('select * from users')
            const promise: any = new Promise((resolve, reject) => {
                if (data) {
                    resolve(data)
                    res.response(data)
                    console.log(data)
                } else {
                    reject("error")
                }
            });
            return promise
        }
        catch (err) {
            console.log(err)
        }
    }
}, {
    method: 'post',
    path: '/register',
    handler: async function (req: hapi.Request, response: hapi.ResponseToolkit) {
        try {
            const data = req.payload
            const password = (data as registerData).password
            const hashedPassword = await bcrypt.hash(password, 10)
            const server = await pool.connect()
            const emailcheck = await server.request()
                .input('email', VarChar(30), (data as registerData).email)
                .execute('email_Check')
            if (emailcheck.recordset[0]) {
                // res.response({UserError:"user exist"})
                const promise: any = new Promise((resolve, reject) => {
                    // console.log("user exist")
                    // res.response("user exist")
                    reject({ error: 'user Exist' })
                })
                return promise
            }
            else {
                console.log("new user")
                const promise: any = new Promise((resolve, reject) => {
                    if (data) {
                        registerSchema.validateAsync(data)
                            .then(res => {
                                const add = server.request()
                                    .input('firstname', VarChar(30), res.firstname)
                                    .input('lastname', VarChar(30), res.firstname)
                                    .input('email', VarChar(30), res.email)
                                    .input('mobile', res.mobile)
                                    .input('password', hashedPassword)
                                    .execute('register')
                                    .then((res) =>
                                        console.log(res))
                                // resolve(add)
                                // resolve('User Added')
                                const user = {
                                    firstname: res.firstname,
                                    lastname: res.lastname,
                                    email: res.email,
                                    mobile: res.mobile,
                                }
                                console.log(user)
                            }).catch(err => {
                                console.log(err.details[0])
                            })
                    } else {
                        reject("error")
                    }
                });
                return promise
            }
        } catch (err) {
            console.log(err)
        }
    }
}])

server.start()
    .then((res) => {
        console.log("Connected")
    })
    .catch((err) => {
        console.log(err)
    })