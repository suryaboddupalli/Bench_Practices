import hapi from '@hapi/hapi'
import { pool } from '../database'
import jwt from 'jsonwebtoken'
import { Config } from '../Config/Convict'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'
import bcrypt from 'bcryptjs'
import { RegisterSchema } from '../ValidationSchema'
import { client } from '../Redis'
import {registerData} from '../Interfaces'
import { LoginSchema } from '../ValidationSchema'
import { verifyRefreshToken, signAccessToken, refreshToken } from '../Helpers/JwtHelpers'
import { RefreshToken } from '../Interfaces/index'


const JwtConfig = Config.get('Jwt')


class UserController {
    async GetUser(req: hapi.Request, res: hapi.ResponseToolkit) {
        try {
            const authHeader = req.headers['authorization']
            const bearerToken = authHeader.split(' ')
            const token = bearerToken[1]
            const data = await (await pool.connect()).query('exec getData')
            const promise: any = new Promise((resolve, reject) => {
                jwt.verify(token, JwtConfig.accessSecret, (err: any, val: any) => {
                    if (err) {
                        const response = res.response("invalid token").code(BAD_REQUEST)
                        resolve(response)
                    }
                    else {
                        if (data) {
                            const response = res.response(data.recordset).code(SUCCESS)
                            resolve(response)
                        }
                    }
                })
            });
            return promise
        }
        catch (error) {
            console.log(error);
        }
    }

    async Register (req:hapi.Request,res:hapi.ResponseToolkit){
        try {
            const Data = req.payload
            const server = await pool.connect()
            const registerPromise: any = new Promise(async (resolve, reject) => {
                const { error, value } = RegisterSchema.validate(Data)
                if (error) {
                    resolve(error.details[0].message)
                }
                else {
                    const emailcheck = await server.query("exec email_Check  @email='" + value.email + "'")
                    if (emailcheck.recordset[0]) {
                        resolve('User Already exist')
                    }
                    else {
                        const hashedPassword = await bcrypt.hash(value.password, 10)
                        
                        const query = "exec register  @email='" + value.email + "',@firstname='" + value.firstname + "',@lastname='" + value.lastname + "',@mobile='" + (value as registerData).mobile + "',@password='" + hashedPassword + "';"
                        const Data = await server.query(query)
                        if (Data.recordset) {
                            const access_Token = await signAccessToken(Data.recordset[0].id)
                            const refresh_Token = await refreshToken(Data.recordset[0].id)
                            const data = Data.recordset[0]
                            if (access_Token) {
                                client.set('currUser', JSON.stringify(data))
                            }
                            const response = res.response({
                                access_Token,
                                refresh_Token,
                                message: "user added successfully",
                                data
                            })
                            resolve(response)
                        }
    
                    }
                }
            })
            return registerPromise
        } catch (err) {
            console.log(err)
        }
    }

    async Login (req:hapi.Request,res:hapi.ResponseToolkit){
        try {
            const Data = req.payload
            const server = await pool.connect()
            const loginpromise: any = new Promise(async (resolve, reject) => {
                const { error, value } = LoginSchema.validate(Data)
                if (error) {
                    const response = res.response(error.details[0].message).code(BAD_REQUEST)
                    resolve(response)
                }
                else {
                    const emailcheck = await server.query("exec email_Check  @email='" + value.email + "'")
                    if (emailcheck.recordset[0]) {
                        const pass = await bcrypt.compare(value.password, emailcheck.recordset[0].password)
                        if (pass) {
                            const Access_Token = await signAccessToken(emailcheck.recordset[0].id)
                            const Refresh_Token = await refreshToken(emailcheck.recordset[0].id)
                            const data = emailcheck.recordset[0]
                            if (Access_Token) {
                                client.set('currUser', JSON.stringify(data))
                            }
                            const response = res.response({
                                Access_Token,
                                Refresh_Token,
                                message: "User Logged In Successfully",
                                data
                            }).code(SUCCESS)
                            resolve(response)
                        }
                        else {
                            const response = res.response('Incorrect Password').code(BAD_REQUEST)
                            resolve(response)
                        }
                    }
                    else {
                        const response = res.response('User Not Found. Please Do Register..').code(BAD_REQUEST)
                        resolve(response)
                    }
                }
            })
            return loginpromise
        } catch (err) {
            res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    }

    async Refresh(req:hapi.Request,res:hapi.ResponseToolkit){
        try {
            const Token = req.payload
            const promise = await new Promise(async (resolve, reject) => {
                if (!Token) {
                    const response = res.response('Token is Required').code(BAD_REQUEST)
                    resolve(response)
                }
                const userId = await verifyRefreshToken((Token as RefreshToken).refreshToken)
                const access_Token = await signAccessToken(userId as string)
                const refresh_Token = await refreshToken(userId as string)
                const response = res.response({
                    access_Token,
                    refresh_Token,
                    message: 'Refreshed Successfully'
                }).code(SUCCESS)
                resolve(response)
            })
            return promise
        }
        catch (err) {
            res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    
    }
}

export const Users = new UserController()
