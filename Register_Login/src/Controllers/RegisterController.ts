import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../database'
import { VarChar } from 'mssql'
import { registerSchema } from "../ValidationSchema"


export const RegisterController = async (req: hapi.Request, response: hapi.ResponseToolkit) => {
    try {
        const Data = req.payload
        const server = await pool.connect()
        const registerPromise: any = new Promise(async (resolve, reject) => {
            const { error, value } = registerSchema.validate(Data)
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
                    resolve("User Already exist")
                }
                else {
                    console.log(value)
                    const hashedPassword = await bcrypt.hash(value.password, 10)
                    console.log(hashedPassword)
                    await server.request()
                        .input('firstname', VarChar(30), value.firstname)
                        .input('lastname', VarChar(30), value.lastname)
                        .input('email', VarChar(30), value.email)
                        .input('mobile', value.mobile)
                        .input('password', hashedPassword)
                        .execute('register')
                    resolve("User Added Successfully")
                }
            }
        })
        return registerPromise
    } catch (err) {
        console.log(err)
    }
}