import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../database'
import { VarChar } from 'mssql'
import { RegisterSchema } from '../ValidationSchema'
import { signAccessToken, refreshToken } from '../Helpers/JwtHelpers'
import { client } from '../Redis'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'


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