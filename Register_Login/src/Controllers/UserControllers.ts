import hapi from '@hapi/hapi'
import { pool } from '../database'
import jwt from 'jsonwebtoken'
import { Config } from '../Config/Convict'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'
import { LoginSchema } from '../ValidationSchema'
import bcrypt from 'bcryptjs'
import { signAccessToken, refreshToken,verifyRefreshToken } from '../Helpers/JwtHelpers'
import { client } from "../Redis"
import { VarChar } from 'mssql'
import { RegisterSchema } from '../ValidationSchema'
import { RToken } from '../Interfaces/index'

const JwtConfig = Config.get('Jwt')

export const DataFetchController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        const data = await (await pool.connect()).query('select * from users')
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
    catch (err) {
        res.response({ err }).code(INTERNAL_SERVER_ERROR)
    }
}

export const LoginController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
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
                const emailcheck = await server.request()
                    .input('email', value.email)
                    .execute('email_Check')
                if (emailcheck.recordset[0]) {
                    const pass = await bcrypt.compare(value.password, emailcheck.recordset[0].password)
                    if (pass) {
                        const token = await signAccessToken(emailcheck.recordset[0].id)
                        const refresh = await refreshToken(emailcheck.recordset[0].id)
                        const data = emailcheck.recordset[0]
                        if (token) {
                            client.set('currUser', JSON.stringify(data))
                        }
                        const response = res.response({
                            token,
                            refresh,
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

export const RegisterController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const Data = req.payload
        const server = await pool.connect()
        const registerPromise: any = new Promise(async (resolve, reject) => {
            const { error, value } = RegisterSchema.validate(Data)
            if (error) {
                const response = res.response(error.details[0].message).code(BAD_REQUEST)
                resolve(response)
            }
            else {
                const hashedPassword = await bcrypt.hash(value.password, 10)
                const user = await server.request()
                    .input('firstname', VarChar(30), value.firstname)
                    .input('lastname', VarChar(30), value.lastname)
                    .input('email', VarChar(30), value.email)
                    .input('mobile', value.mobile)
                    .input('password', hashedPassword)
                    .output('response', VarChar(500))
                    .execute('userData')
                if (user.output.response === "fail") {
                    const response = res.response('User Already exist').code(BAD_REQUEST)
                    resolve(response)
                }
                else {
                    const token = await signAccessToken(user.recordset[0].id)
                    const refresh = await refreshToken(user.recordset[0].id)
                    if (token) {
                        client.set('currUser', JSON.stringify(user))
                    }
                    const userData = user.recordset[0]
                    const response = res.response({
                        token,
                        refresh,
                        message: "user added successfully",
                        userData
                    }).code(SUCCESS)
                    resolve(response)
                }
            }
        })
        return registerPromise
    }
    catch (err) {
        res.response({ err }).code(INTERNAL_SERVER_ERROR)

    }
}

export const RefreshController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const Token = req.payload
        const promise = await new Promise(async (resolve, reject) => {
            if (!Token) {
                const response = res.response('Token is Required').code(BAD_REQUEST)
                resolve(response)
            }
            const userId = await verifyRefreshToken((Token as RToken).refreshToken)
            const access_Token = await signAccessToken(userId as string)
            const refresh_Token = await refreshToken(userId as string)
            const tokens = res.response({
                access_Token,
                refresh_Token,
                message: 'Refreshed Successfully'
            }).code(SUCCESS)
            resolve(tokens)
        })
        return promise
    }
    catch (err) {
        res.response({ err }).code(INTERNAL_SERVER_ERROR)
    }

}