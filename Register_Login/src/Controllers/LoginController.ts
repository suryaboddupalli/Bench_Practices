import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../database'
import { VarChar } from 'mssql'
import { loginSchema } from '../ValidationSchema'
import jwt from 'jsonwebtoken'
require('dotenv').config()

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
                        // console.log("hello")
                        const secert: any = process.env.TOKEN_SECERT
                        const token = await jwt.sign(emailcheck.recordset[0].id, secert)
                        console.log(token)
                        if (token) {
                            resolve(emailcheck.recordset[0])
                        }
                    }
                }
                else {
                    resolve("User Not Found. Please Do Register..")
                }
            }
        })
        return loginpromise
    } catch (err) {
        console.log(err)
    }
}