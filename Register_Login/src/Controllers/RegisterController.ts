import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../database'
import { VarChar } from 'mssql'
import { registerSchema } from '../ValidationSchema'
import { signAccessToken, refreshToken } from '../Helpers/JwtHelpers'
import { client } from '../Redis'


export const RegisterController = async (req: hapi.Request, response: hapi.ResponseToolkit) => {
    try {
        const Data = req.payload
        const server = await pool.connect()
        const registerPromise: any = new Promise(async (resolve, reject) => {
            const { error, value } = registerSchema.validate(Data)
            if (error) {
                resolve(error.details[0].message)
            }
            else {
                const emailcheck = await server.request()
                    .input('email', VarChar(30), value.email)
                    .execute('email_Check')
                if (emailcheck.recordset[0]) {
                    resolve('User Already exist')
                }
                else {
                    const hashedPassword = await bcrypt.hash(value.password, 10)
                    const Data = await server.request()
                        .input('firstname', VarChar(30), value.firstname)
                        .input('lastname', VarChar(30), value.lastname)
                        .input('email', VarChar(30), value.email)
                        .input('mobile', value.mobile)
                        .input('password', hashedPassword)
                        .execute('register')
                    if (Data.recordset) {
                        const token = await signAccessToken(Data.recordset[0].id)
                        const refresh = await refreshToken(Data.recordset[0].id)
                        const data = Data.recordset[0]
                        if (token) {
                            client.set('currUser', JSON.stringify(data))
                        }
                        const res = response.response({
                            token,
                            refresh,
                            message: "user added successfully",
                            data
                        })
                        resolve(res)
                    }

                }
            }
        })
        return registerPromise
    } catch (err) {
        console.log(err)
    }
}