import hapi from '@hapi/hapi'
import bcrypt from 'bcryptjs'
import { pool } from '../../database'
import { RegisterSchema } from '../../ValidationSchema'
import { signAccessToken, refreshToken } from '../../Helpers/JwtHelpers'
import { client } from '../../Redis'
import {registerData} from '../../Interfaces'


export const RegisterController = async (req: hapi.Request, response: hapi.ResponseToolkit) => {
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
                        const res = response.response({
                            access_Token,
                            refresh_Token,
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