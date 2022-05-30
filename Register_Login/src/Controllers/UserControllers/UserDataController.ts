import hapi from '@hapi/hapi'
import { pool } from '../../database'
import jwt from 'jsonwebtoken'
import { Config } from '../../Config/Convict'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../../Constants/http'

const JwtConfig = Config.get('Jwt')

export const UserDataController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
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
    catch (err) {
        res.response({ err }).code(INTERNAL_SERVER_ERROR)
    }
}

