import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../database'
import { VarChar } from 'mssql'
import { loginSchema } from '../ValidationSchema'
require('dotenv').config()
import { signAccessToken, refreshToken } from '../Helpers/JwtHelpers'
import { client } from "../Redis"
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'


export const LoginController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const Data = req.payload
        const server = await pool.connect()
        const loginpromise: any = new Promise(async (resolve, reject) => {
            const { error, value } = loginSchema.validate(Data)
            if (error) {
                const response = res.response(error.details[0].message).code(BAD_REQUEST)
                resolve(response)
            }
            else {
                const emailcheck = await server.request()
                    .input('email', VarChar(30), value.email)
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