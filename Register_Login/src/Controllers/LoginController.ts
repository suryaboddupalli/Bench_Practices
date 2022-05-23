import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../database'
import { VarChar } from 'mssql'
import { loginSchema } from '../ValidationSchema'
require('dotenv').config()
import { signAccessToken, refreshToken } from '../Helpers/JwtHelpers'


export const LoginController = async (req: hapi.Request, response: hapi.ResponseToolkit) => {
    try {
        const Data = req.payload
        const server = await pool.connect()
        const loginpromise: any = new Promise(async (resolve, reject) => {
            const { error, value } = loginSchema.validate(Data)
            if (error) {
                console.log(error.details[0].message)
                resolve(error.details[0].message)
            }
            else {
                const emailcheck = await server.request()
                    .input('email', VarChar(30), value.email)
                    .execute('email_Check')
                if (emailcheck.recordset[0]) {
                    console.log(emailcheck.recordset[0])
                    const pass = await bcrypt.compare(value.password, emailcheck.recordset[0].password)
                    console.log(pass)
                    if (pass) {
                        const token = await signAccessToken(emailcheck.recordset[0].id)
                        const refresh = await refreshToken(emailcheck.recordset[0].id)
                        console.log(token, 'REFRESH' + '' + refresh)
                        if (token) {
                            console.log(emailcheck.recordset[0])
                        }
                        resolve('login successfull')
                    }
                }
                else {
                    resolve('User Not Found. Please Do Register..')
                }
            }
        })
        return loginpromise
    } catch (err) {
        console.log(err)
    }
}